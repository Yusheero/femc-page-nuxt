<script setup>
import { useHead } from '#imports'
useHead({
  title: 'FEMC | Wensar',
  meta: [
    { name: 'description', content: 'Сервер Wensar — часть комплекса FEMC. Играйте на уникальном сервере Minecraft!' },
    { name: 'keywords', content: 'wensar, сервер, майнкрафт, femc' },
    { property: 'og:title', content: 'FEMC | Wensar' },
    { property: 'og:description', content: 'Сервер Wensar — часть комплекса FEMC. Играйте на уникальном сервере Minecraft!' },
    { property: 'og:image', content: '/logo.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://femc.space/wensar' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FEMC | Wensar' },
    { name: 'twitter:description', content: 'Сервер Wensar — часть комплекса FEMC. Играйте на уникальном сервере Minecraft!' },
    { name: 'twitter:image', content: '/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://femc.space/wensar' }
  ]
})
import { serversData } from '~/data/servers-data';
import { newsData } from '@/data/news-data';
import { usePageStore } from '@/stores/store';

const store = usePageStore();
const routeId = useRoute().name;

/** Онлайн по серверам */
const serverStats = computed(() => {
  if (typeof(routeId) === 'string') {
    return store.getServerStatus(routeId)
  }
});

/** Данные по серверам из Data */
const serverData = ref();

/** Данные по новостям серверам из Data */
const serverNews = ref();


/** Получение всех данных по серверу через название роута */
serverData.value = serversData.find(s => s.id === routeId);
serverNews.value = newsData.filter((item) => item.server === routeId);
</script>

<template>
  <div class="wensar-page">
    <ServerInfo class="wensar-page__info" :data="serverData" />
    <ServerPlayers class="wensar-page__players" />
    <ServerMap class="wensar-page__map" />
    <ServerNews class="wensar-page__news" :news="serverNews" />
  </div>
</template>

<style scoped lang="scss">
.wensar-page {
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 3fr 1fr;
  grid-template-rows: 3fr 1fr 2fr;
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




