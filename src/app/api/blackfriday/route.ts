import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

import {
  isValidEmail,
  isValidName,
  normalizePhone,
} from "@/app/blackfriday/validation";
import { SITE_URL } from "@/constants/seo";
import {
  getClientIp as getRequestIp,
  readMetaContext,
  sendConversionEvent,
} from "@/libs/metaConversions";

const notionApiKey = process.env.NOTION_API_KEY;
const notionDatabaseId = process.env.NOTION_DATABASE_KEY;

const notion = notionApiKey ? new Client({ auth: notionApiKey }) : null;

type NotionDatabaseWithSources = {
  data_sources?: Array<{ id?: string }>;
};

type NotionPropertySchema = {
  type?: string;
};

type NotionRichText = {
  plain_text?: string;
};

type NotionPageProperty = {
  type?: string;
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  phone_number?: string | null;
  email?: string | null;
  date?: { start?: string | null } | null;
};

let cachedDataSourceId: string | null = null;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestsByIp = new Map<string, { count: number; resetAt: number }>();

async function resolveDataSourceId(client: Client, databaseId: string) {
  if (cachedDataSourceId) return cachedDataSourceId;

  const database = (await client.databases.retrieve({
    database_id: databaseId,
  })) as NotionDatabaseWithSources;

  const dataSourceId = database.data_sources?.[0]?.id;
  if (!dataSourceId) return null;

  cachedDataSourceId = dataSourceId;
  return dataSourceId;
}

const getClientIp = getRequestIp;

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const current = requestsByIp.get(ip);
  if (!current || now > current.resetAt) {
    requestsByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (current.count >= RATE_LIMIT_MAX_REQUESTS) return true;
  current.count += 1;
  requestsByIp.set(ip, current);
  return false;
};

const registrationDate = () => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((item) => item.type === type)?.value ?? "";
  return `${part("year")}-${part("month")}-${part("day")}`;
};

const parsePayload = (payload: unknown) => {
  if (!payload || typeof payload !== "object") return null;
  const obj = payload as Record<string, unknown>;
  const email =
    typeof obj.email === "string" ? obj.email.trim().toLowerCase() : "";
  const name = typeof obj.name === "string" ? obj.name.trim() : "";
  const phone =
    typeof obj.phone === "string" ? normalizePhone(obj.phone) : null;
  if (!isValidEmail(email) || !isValidName(name) || !phone) return null;
  return { email, name, phone };
};

function findProperty(
  schema: Record<string, NotionPropertySchema>,
  name: string,
) {
  const target = name.toLowerCase();
  for (const [key, value] of Object.entries(schema)) {
    if (key.toLowerCase() === target) {
      return { key, type: value.type ?? "rich_text" };
    }
  }
  return null;
}

function richTextValue(content: string) {
  return {
    rich_text: [{ type: "text", text: { content } }],
  };
}

function assignProperty(
  properties: Record<string, unknown>,
  schema: Record<string, NotionPropertySchema>,
  name: string,
  content: string,
) {
  const property = findProperty(schema, name);
  if (!property) return false;

  if (property.type === "title") {
    properties[property.key] = {
      title: [{ type: "text", text: { content } }],
    };
  } else if (property.type === "phone_number") {
    properties[property.key] = { phone_number: content };
  } else if (property.type === "email") {
    properties[property.key] = { email: content };
  } else {
    properties[property.key] = richTextValue(content);
  }

  return true;
}

function readPropertyText(property: NotionPageProperty | undefined) {
  if (!property) return "";
  if (property.type === "title") {
    return property.title?.map((item) => item.plain_text ?? "").join("") ?? "";
  }
  if (property.type === "rich_text") {
    return (
      property.rich_text?.map((item) => item.plain_text ?? "").join("") ?? ""
    );
  }
  if (property.type === "phone_number") return property.phone_number ?? "";
  if (property.type === "email") return property.email ?? "";
  if (property.type === "date") return property.date?.start ?? "";
  return "";
}

function assignDate(
  properties: Record<string, unknown>,
  schema: Record<string, NotionPropertySchema>,
  start: string,
) {
  const property = findProperty(schema, "Date");
  if (!property) return false;

  if (property.type === "date") {
    properties[property.key] = { date: { start } };
    return true;
  }

  return assignProperty(properties, schema, "Date", start);
}

export async function POST(req: Request) {
  if (!notion || !notionDatabaseId) {
    return NextResponse.json(
      { ok: false, error: "Server misconfiguration" },
      { status: 500 },
    );
  }

  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json(
      { ok: false, error: "Too many requests" },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  const parsed = parsePayload(body);
  if (!parsed) {
    return NextResponse.json(
      { ok: false, error: "Invalid request fields" },
      { status: 400 },
    );
  }

  try {
    const dataSourceId = await resolveDataSourceId(notion, notionDatabaseId);
    if (!dataSourceId) {
      return NextResponse.json(
        { ok: false, error: "Unable to create lead" },
        { status: 502 },
      );
    }

    const source = (await notion.dataSources.retrieve({
      data_source_id: dataSourceId,
    })) as { properties?: Record<string, NotionPropertySchema> };
    const schema = source.properties ?? {};
    const properties: Record<string, unknown> = {};
    const wroteId = assignProperty(properties, schema, "ID", parsed.email);
    const wroteName = assignProperty(properties, schema, "Name", parsed.name);
    const wrotePhone = assignProperty(
      properties,
      schema,
      "Phone",
      parsed.phone,
    );
    const wroteDate = assignDate(properties, schema, registrationDate());

    if (!wroteId || !wroteName || !wrotePhone || !wroteDate) {
      console.error(
        "[blackfriday] Notion columns not found",
        Object.keys(schema),
      );
      return NextResponse.json(
        { ok: false, error: "Unable to create lead" },
        { status: 502 },
      );
    }

    const created = (await notion.pages.create({
      parent: { type: "data_source_id", data_source_id: dataSourceId },
      properties: properties as never,
    })) as { properties?: Record<string, NotionPageProperty> };

    const savedId = readPropertyText(
      created.properties?.[findProperty(schema, "ID")?.key ?? "ID"],
    );
    const savedName = readPropertyText(
      created.properties?.[findProperty(schema, "Name")?.key ?? "Name"],
    );
    const savedPhone = readPropertyText(
      created.properties?.[findProperty(schema, "Phone")?.key ?? "Phone"],
    );
    const savedDate = readPropertyText(
      created.properties?.[findProperty(schema, "Date")?.key ?? "Date"],
    );

    if (!savedId || !savedName || !savedPhone || !savedDate) {
      console.error(
        "[blackfriday] Notion saved the page without ID, Name, Phone or Date",
      );
      return NextResponse.json(
        { ok: false, error: "Unable to create lead" },
        { status: 502 },
      );
    }

    const meta = readMetaContext(body);
    if (meta) {
      const metaResult = await sendConversionEvent({
        eventName: "Lead",
        eventId: meta.eventId,
        eventSourceUrl: meta.eventSourceUrl ?? `${SITE_URL}/blackfriday`,
        fbp: meta.fbp,
        fbc: meta.fbc,
        ip: getClientIp(req),
        userAgent: req.headers.get("user-agent") ?? undefined,
        email: parsed.email,
        phone: parsed.phone,
        name: parsed.name,
      });
      if (metaResult === "failed") {
        console.error("[blackfriday] Lead saved, Meta event failed");
      }
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("[blackfriday] Failed to create Notion page", error);
    return NextResponse.json(
      { ok: false, error: "Unable to create lead" },
      { status: 502 },
    );
  }
}
