<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { DiscordIcon, VkIcon } from 'vue3-simple-icons'

const router = useRouter();
const toRouterPath = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="send-news">
    <div class="send-news__header">
      <button class="send-news__button" @click="toRouterPath"><ArrowLeft :size="18" color="#CCCCCC" /></button>
    </div>    
    <div class="send-news__content">
      <a class="item" href="https://discord.gg/BMA2mmaw">
        <div class="item__image"><DiscordIcon style="fill: #7289da" size="20px"/></div>
        <div class="item__text">FEMC Discord</div>
      </a>
      <a class="item" href="https://vk.com/topic-216473688_53270569">
        <div class="item__image"><VkIcon style="fill: #4C75A3" size="20px"/></div>
        <div class="item__text">FEMC VK Group</div>
      </a>
    </div>
    <p class="send-news__attention">Для избежания конфликтных ситуаций настоятельно рекомендуем ознакомиться с правилами проекта, а так же с правилами размещения новостей  в базе знаний!</p>
  </div>
</template>

<style scoped lang="scss">
.send-news {
  position: relative;
  background: var(--color-black-light);
  border: 2px solid var(--color-grey);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  overflow: hidden;

  &__title {
    text-align: center;
    font-size: 1rem;
    width: 80%;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    width: 100%;
    border-bottom: 2px solid var(--color-grey);
  }

  &__content {
    width: 100%;
    display: grid;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
  }

  &__attention {
    font-size: 1rem;
    font-weight: 300;
    color: var(--color-secondary-dark);
    text-align: center;
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

.item {
  width: 100%;
  padding: 0.375rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-grey-dark);
  color: var(--color-secondary-dark);
  border-radius: 0.5rem;
  text-decoration: none;

  &:hover {
    background: var(--color-grey-light);
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 0.25rem;
    background: var(--color-grey-light);
  }

  &__icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>
