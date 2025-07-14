<script setup lang="ts">
import { computed } from 'vue';
import { usePageStore } from '@/stores/store';
import { useNewsStore } from '@/stores/news-store';
import { useRoute } from "vue-router";
import { useRouter } from 'vue-router';
import { X } from 'lucide-vue-next';

const router = useRouter();
const route = useRoute();
const newsId = route.params.id as string;

/** Хранилище статистики серверов */
const store = usePageStore();
/** Хранилище данных новостей */
const newsStore = useNewsStore();


/** Отображаемые на странице данные */
const pageData = computed(() => newsStore.news.find((n) => n.id === newsId));

const toRouterPath = () => {
  const lastRoutePath = store.lastRoutePath;
  console.log('lastRoutePath', lastRoutePath);

  if (lastRoutePath) {
    router.push({ path: `${lastRoutePath}`})
  }
  else {
    router.push({ path: '/news'});
  }
}
</script>

<template>
  <div class="page">
    <div class="page__content" :style="{ backgroundImage: `url(${pageData.serverPreviewImage})` }">
      <div class="page__title">{{ pageData?.title }}</div>
      <div class="page__description">{{ pageData?.text }}</div>
      <button @click="toRouterPath()" class="page__button"><X :size="22" color="#CCCCCC" /></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100dvh;
  padding: 1rem;
  background: var(--color-black);

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    border: 2px solid var(--color-grey);
    border-radius: 1rem;
    gap: 2rem;
    padding: 2rem;
    background: var(--color-black);
    color: var(--color-secondary);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
  }

  &__title {
    font-size: 30px;
    font-weight: 700;
  }

  &__description {
    font-size: 20px;
    font-weight: 500;
  }

  &__button {
    background-color: #535353;
    position: absolute;
    top: 40px;
    right: 40px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;

    &:hover {
      background-color: rgb(37, 37, 37);
      cursor: pointer;
    }
  }
}

</style>