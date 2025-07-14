import { defineStore } from 'pinia';
import { ref } from 'vue';
import { newsData } from '@/data/news-data';
import type { NewsItemInterface } from '~/interfaces/news-item-interface';

export const useNewsStore = defineStore('news-store', () => {
  const news = ref<NewsItemInterface[]>(newsData);

  return {
    news,
  }
})