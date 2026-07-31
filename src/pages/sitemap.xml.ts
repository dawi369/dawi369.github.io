export const prerender = true;

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/tech/', priority: '0.6' },
];

export function GET() {
  const lastModified = new Date().toISOString();
  const urls = routes
    .map(
      ({ path, priority }) => `  <url>
    <loc>https://daviderwin.me${path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    }
  );
}
