export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  
  // Настройки кэширования для разных типов контента
  if (url.pathname.startsWith('/api/')) {
    // API запросы кэшируем на 5 минут
    setHeader(event, 'Cache-Control', 'public, max-age=300')
  } else if (url.pathname.startsWith('/news/')) {
    // Страницы новостей кэшируем на 1 час
    setHeader(event, 'Cache-Control', 'public, max-age=3600')
  } else if (url.pathname === '/' || url.pathname === '/servers') {
    // Главная и страница серверов кэшируем на 30 минут
    setHeader(event, 'Cache-Control', 'public, max-age=1800')
  } else {
    // Остальные страницы кэшируем на 1 час
    setHeader(event, 'Cache-Control', 'public, max-age=3600')
  }

  // Добавляем заголовки для SEO
  setHeader(event, 'X-Robots-Tag', 'index, follow')
  
  // Добавляем заголовки безопасности
  setHeader(event, 'X-Content-Type-Options', 'nosniff')
  setHeader(event, 'X-Frame-Options', 'DENY')
  setHeader(event, 'X-XSS-Protection', '1; mode=block')
}) 