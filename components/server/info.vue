<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  data: Object,
})

const toRouterPath = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="info">
    <div class="info__container">
      <div class="info__header">
        <button class="info__button" @click="toRouterPath"><ArrowLeft :size="18" color="#CCCCCC" /></button>
      </div>
      <div class="info__inner">
        <div class="info__logo" :style="{ backgroundImage: `url(${props.data?.logo})`}"></div>
        <p class="info__description" v-for="item in props.data?.description">{{ item }}</p>
      </div>
    </div>  
  </div>
</template>

<style scoped lang="scss">
.info {
  position: relative;
  background: var(--color-black-light);
  border: 2px solid var(--color-grey);
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  &__header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    border-bottom: 2px solid var(--color-grey);
  }

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    padding: 2rem;
  }

  &__logo {
    width: 220px;
    height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 0.5rem;
  }

  &__description {
    line-height: 120%;
    font-size: 0.9rem;
    font-weight: 200;
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

  &__bottom-buttons {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem;
  }

  &__bottom-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    background: var(--color-grey-dark);
    opacity: 0.8;
    width: 100%;
    padding: 1rem 0;
    height: 60px;
    color: var(--color-secondary-dark);
    font-size: 1rem;
    font-family: "Nunito Sans", serif;

    &:hover {
      background: var(--color-grey-light);
      cursor: pointer;
    }
  }
}
</style>

