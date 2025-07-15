<script setup>
import { useHead } from '#imports'
useHead({
  title: 'FEMC | Серверы',
  meta: [
    { name: 'description', content: 'Список серверов FEMC — выбери свой сервер для игры в Minecraft на Дальнем Востоке.' },
    { name: 'keywords', content: 'серверы, майнкрафт, femc, список серверов' },
    { property: 'og:title', content: 'FEMC | Серверы' },
    { property: 'og:description', content: 'Список серверов FEMC — выбери свой сервер для игры в Minecraft на Дальнем Востоке.' },
    { property: 'og:image', content: '/logo.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://femc.space/servers' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FEMC | Серверы' },
    { name: 'twitter:description', content: 'Список серверов FEMC — выбери свой сервер для игры в Minecraft на Дальнем Востоке.' },
    { name: 'twitter:image', content: '/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://femc.space/servers' }
  ]
})
</script>

<template>
  <div class="servers-page">

  </div>
</template>

<style scoped lang="scss">
.servers-page {
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas:
    "info info players map  map"
    "info info players map  map"
    "news news news    news news";
  gap: 0.8rem;
  padding: 0.8rem;
  background: var(--color-black);
  color: var(--color-secondary);

  &__info {
    grid-area: info;
  }

  &__players {
    grid-area: players;
  }

  &__map {
    grid-area: map;
  }

  &__news {
    grid-area: news;
  }
}
</style>


