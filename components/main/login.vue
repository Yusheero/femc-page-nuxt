<script setup lang="ts">
import { usePageStore } from '@/stores/store';
import { ref, onMounted } from 'vue';
import CookieConsent from './cookie-consent.vue';

const store = usePageStore();

onMounted(() => {
  // Дополнительная проверка куки на случай, если store не успел инициализироваться
  if (!store.cookieAccepted) {
    const match = document.cookie.match(/(?:^|; )cookieAccepted=([^;]*)/);
    if (match && match[1] === '1') {
      store.setCookieAccepted(true);
    }
  }
});
</script>

<template>
  <div class="login">
    <CookieConsent v-if="!store.cookieAccepted" @accept="() => store.setCookieAccepted(true)" />
    <template v-else>
      <div class="login__title">Статистика по серверам и возможность писать в чат</div>
      <button class="login__button">Войти</button>
    </template>
  </div>
</template>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: var(--color-black-light);
  border: 2px solid var(--color-grey);
  border-radius: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &__title {
    font-size: 16px;
  }

  &__button {
    width: 10rem;
    height: 3rem;
    padding: 1rem 0;
    border: none;
    border-radius: 0.5rem;
    background: #921c1c;
    color: var(--color-secondary);
    opacity: 0.8;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Nunito Sans", serif;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-secondary-deep-dark-fantasies);
      cursor: pointer;
    }
  }
}
</style>
