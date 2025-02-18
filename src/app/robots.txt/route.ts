export const dynamic = 'force-dynamic';

export async function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://moccelinadvocacia.com';

  const robotsTxt = `
    User-agent: *
    Allow: /
    Disallow: /#inicio-da-pagina
    Disallow: /#topHome
    Sitemap: ${siteUrl}/sitemap.xml
  `;

  return new Response(robotsTxt.trim(), {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
