// Structured data: a JSON block search engines and AI crawlers parse to learn
// what this page is. Next renders this server-side, so it ships in the HTML.
// The JSON is stringified rather than written as JSX because the content has
// to be exactly one JSON object, not React-escaped text.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
