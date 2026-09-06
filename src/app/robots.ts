import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://lilin31311227-chinese.github.io/lilin-guowen';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
