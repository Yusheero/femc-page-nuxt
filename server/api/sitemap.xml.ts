export default defineEventHandler(async (event) => {
  const baseUrl = 'https://femc.space'
  
  // Статические страницы
  const staticPages = [
    '',
    '/servers',
    '/team',
    '/celedia',
    '/wensar',
    '/pawhera',
    '/news'
  ]

  // Получаем данные новостей для динамических URL
  let newsPages: string[] = []
  try {
    const response = await $fetch('https://femc.space/api/news')
    if (response && response.status) {
      newsPages = response.status.map((news: any) => `/news/${news.id}`)
    }
  } catch (error) {
    console.error('Ошибка при получении новостей для sitemap:', error)
  }

  // Объединяем все страницы
  const allPages = [...staticPages, ...newsPages]

  // Генерируем XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : page.startsWith('/news/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('/news/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`

  // Устанавливаем заголовки
  setHeader(event, 'Content-Type', 'application/xml')
  setHeader(event, 'Cache-Control', 'public, max-age=3600') // Кэшируем на 1 час

  return sitemap
}) 