<script setup>
import { useHead } from '#imports'
useHead({
  title: 'FEMC | Celedia',
  meta: [
    { name: 'description', content: 'Сервер Celedia — часть комплекса FEMC. Играйте на уникальном сервере Minecraft!' },
    { name: 'keywords', content: 'celedia, сервер, майнкрафт, femc' },
    { property: 'og:title', content: 'FEMC | Celedia' },
    { property: 'og:description', content: 'Сервер Celedia — часть комплекса FEMC. Играйте на уникальном сервере Minecraft!' },
    { property: 'og:image', content: '/logo.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://femc.space/celedia' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FEMC | Celedia' },
    { name: 'twitter:description', content: 'Сервер Celedia — часть комплекса FEMC. Играйте на уникальном сервере Minecraft!' },
    { name: 'twitter:image', content: '/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://femc.ru/celedia' }
  ]
})
import { usePageStore } from '@/stores/store';
import { useServersDataStore } from '@/stores/servers-data-store';
import { useNewsStore } from '@/stores/news-store';

/** Хранилище статистики серверов */
const store = usePageStore();

/** Хранилище данных серверов */
const serversDataStore = useServersDataStore();

/** Хранилище данных серверов */
const newsStore = useNewsStore();

const routeId = useRoute().name;

/** Онлайн по серверам */
const serverStats = computed(() => {
  if (typeof(routeId) === 'string') {
    return store.getServerStatus(routeId);
  }
});

/** Данные по серверу */
const serverData = computed(() => serversDataStore.data.find(s => s.id === routeId));

/** Новости по серверу */
const serverNews = computed(() => newsStore.news.filter((item) => item.server === routeId));
</script>

<template>
  <div class="celedia-page">
    <ServerInfo class="celedia-page__info" :data="serverData" />
    <ServerPlayers class="celedia-page__players" />
    <ServerMap class="celedia-page__map" />
    <ServerNews class="celedia-page__news" :news="serverNews" />
  </div>
</template>

<style scoped lang="scss">
.celedia-page {
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


