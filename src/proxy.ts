import { NextRequest, NextResponse } from "next/server";

import {
  isValidLocale,
  resolvePreferredLocale,
  stripLocaleFromPath,
  withLocalePath,
  type Locale,
} from "@/libs/i18n";

const LANGUAGE_COOKIE = "app-language";
const LANGUAGE_COOKIE_OPTIONS = {
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
  sameSite: "lax" as const,
};

function redirectToLocale(req: NextRequest, locale: Locale, pathname: string) {
  const url = req.nextUrl.clone();
  url.pathname = withLocalePath(locale, stripLocaleFromPath(pathname));
  url.searchParams.delete("lang");
  const response = NextResponse.redirect(url);
  if (req.cookies.get(LANGUAGE_COOKIE)?.value !== locale) {
    response.cookies.set(LANGUAGE_COOKIE, locale, LANGUAGE_COOKIE_OPTIONS);
  }
  return response;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const firstSegment = pathname.split("/").find(Boolean);

  if (
    firstSegment === "_next" ||
    firstSegment === "api" ||
    firstSegment === "blackfriday" ||
    (pathname !== "/" && pathname.includes("."))
  ) {
    return NextResponse.next();
  }

  const langQuery = req.nextUrl.searchParams.get("lang");
  if (langQuery && isValidLocale(langQuery)) {
    const current = firstSegment && isValidLocale(firstSegment) ? firstSegment : null;
    if (current !== langQuery) {
      return redirectToLocale(req, langQuery, pathname);
    }
    if (req.nextUrl.searchParams.has("lang")) {
      const url = req.nextUrl.clone();
      url.searchParams.delete("lang");
      return NextResponse.redirect(url);
    }
  }

  if (firstSegment && isValidLocale(firstSegment)) {
    return NextResponse.next();
  }

  const resolvedLocale = resolvePreferredLocale({
    cookieLocale: req.cookies.get(LANGUAGE_COOKIE)?.value,
    acceptLanguage: req.headers.get("accept-language"),
  });

  return redirectToLocale(req, resolvedLocale, pathname);
}

export const config = {
  matcher: ["/", "/((?!pt|en|blackfriday|_next|api|.*\\..*).*)"],
};
