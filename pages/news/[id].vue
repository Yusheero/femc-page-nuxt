<script setup lang="ts">
import { useHead } from '#imports'
import { computed } from 'vue';
import { usePageStore } from '@/stores/store';
import { useNewsStore } from '@/stores/news-store';
import { useRoute } from "vue-router";
import { useRouter } from 'vue-router';
import { X } from 'lucide-vue-next';
import { NuxtImg } from '#components';

const router = useRouter();
const route = useRoute();
const newsId = route.params.id as string;

/** Хранилище статистики серверов */
const store = usePageStore();
/** Хранилище данных новостей */
const newsStore = useNewsStore();


/** Отображаемые на странице данные */
const pageData = computed(() => newsStore.news.find((n) => n.id === newsId));

useHead(() => {
  const title = pageData.value ? `FEMC | ${pageData.value.title}` : 'FEMC | Новость';
  const description = pageData.value?.text?.slice(0, 160) || 'Новости FEMC — будь в курсе последних событий на наших серверах Minecraft.';
  const image = pageData.value?.serverPreviewImage || '/logo.png';
  const url = `https://femc.space/news/${newsId}`;
  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ],
    link: [
      { rel: 'canonical', href: url }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          'headline': pageData.value?.title,
          'image': [image],
          'datePublished': pageData.value?.date || '',
          'author': {
            '@type': 'Person',
            'name': pageData.value?.author || 'FEMC'
          },
          'description': description,
          'mainEntityOfPage': url
        })
      }
    ]
  }
})

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
    <div class="page__content">
      <div class="page__info">
        <div class="page__header">
          <button class="page__button" @click="toRouterPath"><ArrowLeft :size="18" color="#CCCCCC" /></button>
        </div>
        <div class="page__inner">
          <div class="page__title">{{ pageData?.title }}</div>
          <div class="page__description">{{ pageData?.text }}</div>
        </div>
      </div>
      <NuxtImg class="page__image" :src="pageData?.serverPreviewImage" :alt="pageData?.title || 'Изображение новости'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100dvh;
  padding: 0.8rem;
  background: var(--color-black);

  &__content {
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: flex-end;
    align-items: flex-start;
    border: 2px solid var(--color-grey);
    border-radius: 1rem;
    background: var(--color-black);
    color: var(--color-secondary);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    overflow: hidden;
  }

  &__header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    border-bottom: 2px solid var(--color-grey);
  }

  &__info {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &__inner {
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }

  &__title {
    font-size: 30px;
    font-weight: 800;
  }

  &__description {
    font-size: 14px;
    font-weight: 400;
  }

  &__image {
    width: 70%;
    height: 100%;
    object-fit: cover;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-right: 2px solid var(--color-grey);
    background: unset;
    opacity: 0.8;
    width: 3rem;
    height: 3rem;

    &:hover {
      background: var(--color-grey-light);
      cursor: pointer;
    }
  }
}

</style>