<script setup>
import { useHead } from '#imports'
useHead({
  title: 'FEMC | Вход',
  meta: [
    { name: 'description', content: 'Вход на сайт FEMC — крупнейшего майнкрафт-сервера Дальнего Востока.' },
    { name: 'keywords', content: 'вход, авторизация, майнкрафт, femc' },
    { property: 'og:title', content: 'FEMC | Вход' },
    { property: 'og:description', content: 'Вход на сайт FEMC — крупнейшего майнкрафт-сервера Дальнего Востока.' },
    { property: 'og:image', content: '/logo.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://femc.space/login' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FEMC | Вход' },
    { name: 'twitter:description', content: 'Вход на сайт FEMC — крупнейшего майнкрафт-сервера Дальнего Востока.' },
    { name: 'twitter:image', content: '/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://femc.space/login' }
  ]
})
</script>

<template>
  <div class="login-page">
    <p>Login</p>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  
}
</style>




