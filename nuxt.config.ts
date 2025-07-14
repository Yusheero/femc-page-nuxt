// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxt/image',
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
  }
})
