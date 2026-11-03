import { SITE_NAME, SITE_URL } from "@/constants/seo";
import { weeklyClasses } from "@/constants/schedules";

const SAME_AS = [
  "https://www.instagram.com/jajiujitsu_pelotas/",
  "https://www.facebook.com/indiojajj",
  "https://www.instagram.com/indiojajj/",
  "https://www.youtube.com/@indiodrills",
  "https://instagram.com/indiodrills/",
  "https://www.google.com/maps/place/INDIO+JA+JIU+JITSU+PELOTAS/@-31.757383,-52.34483,17z",
];

function openingHours() {
  return Object.entries(weeklyClasses)
    .filter(([day, sessions]) => day !== "Holiday" && sessions.length > 0)
    .map(([day, sessions]) => {
      const opens = [...sessions].sort((a, b) =>
        a.startTime.localeCompare(b.startTime),
      )[0].startTime;
      const closes = [...sessions].sort((a, b) =>
        b.endTime.localeCompare(a.endTime),
      )[0].endTime;
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${day}`,
        opens,
        closes,
      };
    });
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: SITE_NAME,
  description:
    "Academia de Jiu Jitsu em Pelotas. JA Índio Jiu Jitsu: aulas e cursos de Jiu-Jitsu para todas as idades e níveis.",
  url: SITE_URL,
  image: `${SITE_URL}/images/visit-card.png`,
  telephone: "+55-53-99188-6599",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Doutor Amarante 779",
    addressLocality: "Pelotas",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -31.757383,
    longitude: -52.34483,
  },
  areaServed: {
    "@type": "City",
    name: "Pelotas",
  },
  openingHoursSpecification: openingHours(),
  sameAs: SAME_AS,
  potentialAction: {
    "@type": "JoinAction",
    target: {
      "@type": "EntryPoint",
      url: "https://wa.me/5553991886599",
      actionPlatform: ["http://schema.org/WhatsApp"],
    },
    name: "Agendar aula experimental de Jiu Jitsu",
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
