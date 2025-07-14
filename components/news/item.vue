<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';
import { usePageStore } from "@/stores/store";
import { useRoute } from "vue-router";
import { useRouter } from 'vue-router';

defineProps({
  data: Object
})

const store = usePageStore();
const route = useRoute();
const router = useRouter();

const toRouterPath = (id: any) => {
  store.setLastRoutePath(route.path);
  router.push({ path: `/news/${id}` })
}
</script>

<template>
  <button @click="toRouterPath(data?.id)" class="news-item" :style="{ backgroundImage: `linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url(${data?.homePreviewImage})` }">
    <div class="news-item__title">{{ data?.title }}</div>
    <div class="news-item__text">{{ data?.text }}</div>
  </button>
</template>

<style scoped lang="scss">
.news-item {
  position: relative;
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: start;
  gap: 0.5rem;
  text-decoration: none;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &__title {
    font-size: 1rem;
    font-weight: 800;
    color: var(--color-secondary-dark);
  }

  &__text {
    font-weight: 400;
    font-size: 0.8rem;
    color: var(--color-secondary-dark);
  }

}
</style>
