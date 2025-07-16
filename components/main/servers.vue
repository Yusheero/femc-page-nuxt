<script setup lang="ts">
/** Компонент серверов на главной странице */
import { NuxtImg } from '#components';
import { useServersDataStore } from '@/stores/servers-data-store';

import { useRouter } from 'vue-router';
const router = useRouter();

const store = useServersDataStore();

const serversData = store.data;

/** Переход на роут /news */
const toRouterPath = (path: string) => {
  router.push({ path: path })
}
</script>

<template>
  <div class="servers">
    <button v-for="item in serversData" @click="toRouterPath(item.routerPath)" class="servers__item item" :style="{ backgroundImage: `url(${item.background})` }">
      <NuxtImg class="item__logo" :src="item.logo"></NuxtImg>
      <div class="item__labels-container">
        <p class="item__label" v-for="s in item.labels">{{ s }}</p>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
.servers {
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--color-black-light);
  border-radius: 1rem;
  border: 2px solid var(--color-grey);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;

  &__item {
    padding: 1.5rem;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border: none;
    background-repeat: no-repeat;
    background-position-x: center;
    transition: background-position-y 2s ease;
    border-right: 2px solid #000;

    &:hover {
      cursor: pointer;
      background-position-y: -20px;
    }
    
  }

  &__item:nth-last-child(-n + 1) {
    border-right: unset;
  }
}

.item {
  &__labels-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 0.5rem;
  }

  &__label {
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 8px;
    background: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    height: 34px;
    filter: drop-shadow(0px 0px 44px rgba(0, 0, 0, 1));
  }
}
</style>

