<script setup>
import { useHead } from '#imports'
useHead({
  title: 'FEMC | Новости',
  meta: [
    { name: 'description', content: 'Новости проекта FEMC — будь в курсе последних событий на наших серверах Minecraft.' },
    { name: 'keywords', content: 'новости, майнкрафт, femc, обновления' },
    { property: 'og:title', content: 'FEMC | Новости' },
    { property: 'og:description', content: 'Новости проекта FEMC — будь в курсе последних событий на наших серверах Minecraft.' },
    { property: 'og:image', content: '/logo.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://femc.space/news' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FEMC | Новости' },
    { name: 'twitter:description', content: 'Новости проекта FEMC — будь в курсе последних событий на наших серверах Minecraft.' },
    { name: 'twitter:image', content: '/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://femc.space/news' }
  ]
})
import { useNewsStore } from '@/stores/news-store';
const store = useNewsStore();

// Данные новостей
const news = computed(() => store.news);

// Актуальная новость
const actualNews = computed(() => store.news[0]);
</script>

<template>
  <div class="news-page">
    <NewsSort class="news-page__sort" />
    <NewsSend class="news-page__send" />
    <NewsItem class="news-page__item" :data="actualNews" />
    <NewsGrid class="news-page__news" :data="news" />
  </div>
</template>

<style scoped lang="scss">
.news-page {
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 2fr 2fr 1fr 1fr;
  grid-template-areas:
    "send send sort sort sort sort"
    "send send news news news news"
    "item item news news news news"
    "item item news news news news"
    "item item news news news news";
  gap: 0.8rem;
  padding: 0.8rem;
  background: var(--color-black);
  color: var(--color-secondary);

  &__item {
    grid-area: item;
  }

  &__send {
    grid-area: send;
  }

  &__news {
    grid-area: news;
  }

  &__sort {
    grid-area: sort;
  }
}
</style>


