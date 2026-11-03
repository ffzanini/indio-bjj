import { SITE_NAME, SITE_URL } from "@/constants/seo";

export function CourseJsonLd({
  name,
  description,
}: Readonly<{ name: string; description: string }>) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
