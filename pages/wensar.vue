<script setup>
import { useHead } from '#imports'
useHead({ title: 'FEMC | Wensar' })
import { serversData } from '~/data/servers-data';
import { newsData } from '@/data/news-data';
import { imagesData } from '@/data/images';
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

/** Данные по картинкам из Data */
const serverPictures = ref();

/** Получение всех данных по серверу через название роута */
serverData.value = serversData.find(s => s.id === routeId);
serverNews.value = newsData.filter((item) => item.server === routeId);
serverPictures.value = imagesData.find((item) => item.server === routeId);
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




