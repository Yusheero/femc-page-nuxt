<script setup>
import { useHead } from '#imports'
useHead({
  title: 'FEMC | Команда',
  meta: [
    { name: 'description', content: 'Команда проекта FEMC — профессионалы своего дела в мире Minecraft.' },
    { name: 'keywords', content: 'команда, админы, модераторы, майнкрафт, femc' },
    { property: 'og:title', content: 'FEMC | Команда' },
    { property: 'og:description', content: 'Команда проекта FEMC — профессионалы своего дела в мире Minecraft.' },
    { property: 'og:image', content: '/logo.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://femc.space/team' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FEMC | Команда' },
    { name: 'twitter:description', content: 'Команда проекта FEMC — профессионалы своего дела в мире Minecraft.' },
    { name: 'twitter:image', content: '/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://femc.space/team' }
  ]
})
</script>

<template>
    <div class="team-page">
        <h1 class="team-page__title">Команда</h1>
    </div>
</template>

<style scoped lang="scss">
.team-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  height: 100vh;
  width: 100vw;

  &__title {
    color: #ffffff;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    font-family: 'Merriweather', serif;
  }
}
</style>


