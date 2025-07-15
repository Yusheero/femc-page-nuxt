<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['accept']);
</script>

<template>
  <div class="cookie-consent">
    <div class="cookie-consent__title">Чтобы стать полноценным пользователем сайта, вам нужно принять Cookie</div>
    <button class="cookie-consent__button" @click="$emit('accept')">Принять Cookie</button>
  </div>
</template>

<style scoped lang="scss">
.cookie-consent {
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
    width: 12rem;
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