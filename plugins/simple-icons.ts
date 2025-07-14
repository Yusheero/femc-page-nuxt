import { defineNuxtPlugin } from '#app'
import * as simpleIcons from 'vue3-simple-icons'

export default defineNuxtPlugin((nuxtApp) => {
  for (const [key, icon] of Object.entries(simpleIcons)) {
    nuxtApp.vueApp.component(key, icon as any)
  }
})