<script setup lang="ts">
const emit = defineEmits(['accept']);
</script>

<template>
  <div class="cookie-consent">
    <div class="cookie-consent__title">Помогите нам улучшить сайт, подтвердите сбор и хранение cookies</div>
    <button class="cookie-consent__button" @click="$emit('accept')">Принять</button>
  </div>
</template>

<style scoped lang="scss">
.cookie-consent {
  width: fit-content;
  padding: 0.5rem;
  background: #fff;
  border-radius: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  &__title {
    margin-left: 1.5rem;
    font-size: 14px;
    color: #000;
  }

  &__button {
    width: 7rem;
    height: 2.5rem;
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