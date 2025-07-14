import { defineNuxtPlugin } from '#app'
import * as lucideIcons from 'lucide-vue-next'

export default defineNuxtPlugin((nuxtApp) => {
  for (const [key, icon] of Object.entries(lucideIcons)) {
    nuxtApp.vueApp.component(key, icon as any)
  }
})