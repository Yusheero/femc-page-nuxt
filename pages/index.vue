<script setup>
import { useHead } from '#imports'
useHead({ 
  title: 'FEMC | Главная',
  meta: [
    { name: 'description', content: 'Дальневосточный комплекс серверов майнкрафт. Лучший сервер на Дальнем Востоке.' },
    { name: 'keywords', content: 'майнкрафт, сервер дальний восток, minecraft, femc' },
    { property: 'og:title', content: 'FEMC | Главная' },
    { property: 'og:description', content: 'Дальневосточный комплекс серверов майнкрафт. Лучший сервер на Дальнем Востоке.' },
    { property: 'og:image', content: '/logo.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://femc.space/' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FEMC | Главная' },
    { name: 'twitter:description', content: 'Дальневосточный комплекс серверов майнкрафт. Лучший сервер на Дальнем Востоке.' },
    { name: 'twitter:image', content: '/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://femc.space/' }
  ]
})
</script>

<template>
    <div class="main-page">
      <MainLogo class="main-page__logo" />
      <MainLogin class="main-page__login" />
      <MainNavigation class="main-page__navigation" />
      <MainSocials class="main-page__socials" />
      <MainServers class="main-page__servers" />
      <MainNews class="main-page__news" />
      <MainChat class="main-page__chat" />
      <Footer class="main-page__footer" />
    </div>
</template>

<style scoped lang="scss">
.main-page {
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-columns: 3fr 1fr 2fr 2fr 1fr 2fr 1fr 1fr 2fr;
  grid-template-rows: 2fr 1fr 2fr 1fr;
  grid-template-areas:
    "logo login      login      servers    servers  servers  servers  servers  servers"
    "logo navigation navigation servers    servers  servers  servers  servers  servers"
    "news news       chat       chat       chat     chat     chat     socials  socials"
    "news news       chat       chat       chat     chat     chat     footer   footer";
  gap: 0.8rem;
  padding: 0.8rem;
  background: var(--color-black);
  color: var(--color-secondary);

  &__logo {
    grid-area: logo;
  }

  &__login {
    grid-area: login;
  }

  &__news {
    grid-area: news;
  }

  &__chat {
    grid-area: chat;
  }

  &__socials {
    grid-area: socials;
  }

  &__servers {
    grid-area: servers;
  }

  &__navigation {
    grid-area: navigation;
  }

  &__footer {
    grid-area: footer;
  }
}
</style>


