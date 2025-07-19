// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxt/image-edge',
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['modern-css-reset', '@/assets/styles/main.scss'],
  googleFonts: {
    families: {
      "Nunito Sans": true,
    },
    display: 'swap',
    prefetch: true,
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' }
      ]
    }
  },
  // Настройки для улучшения SEO
  nitro: {
    prerender: {
      routes: [
        '/',
        '/servers',
        '/team',
        '/celedia',
        '/wensar',
        '/pawhera',
        '/news'
      ],
      ignore: [
        '/_ipx/**'
      ]
    },
    // Настройки кэширования
    storage: {
      redis: {
        driver: 'memory'
      }
    }
  },
  // Настройки для генерации статических страниц
  experimental: {
    payloadExtraction: false
  },
  // Настройки для улучшения производительности
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router']
          }
        }
      }
    }
  }
})
