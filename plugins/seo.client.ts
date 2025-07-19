export default defineNuxtPlugin(() => {
  // Добавляем структурированные данные для лучшей индексации
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FEMC - Дальневосточный комплекс серверов Minecraft',
    url: 'https://femc.space',
    description: 'Дальневосточный комплекс серверов майнкрафт. Лучший сервер на Дальнем Востоке.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://femc.space/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  // Добавляем структурированные данные в head
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData)
      }
    ]
  })

  // Добавляем мета-теги для социальных сетей
  useHead({
    meta: [
      { property: 'og:site_name', content: 'FEMC' },
      { property: 'og:locale', content: 'ru_RU' },
      { name: 'twitter:site', content: '@femc_space' },
      { name: 'twitter:creator', content: '@femc_space' }
    ]
  })
}) 