import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://lilin31311227-chinese.github.io/lilin-guowen';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{ path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }> = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/for-students', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/for-parents', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/mentor-column', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/activities', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/methodology', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/testimonials', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/exam-strategy', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/diagnosis', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/design-system', priority: 0.3, changeFrequency: 'monthly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => {
    const normalized = path === '/' ? '/' : `${path}/`;
    return {
      url: `${SITE_URL}${normalized}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
