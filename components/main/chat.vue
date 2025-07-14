<script setup lang="ts"></script>

<template>
  <div class="chat">
    <h2 class="chat__title">Разработка компонента чата</h2>
  </div>
</template>

<style scoped lang="scss">
.chat {
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
    font-size: 22px;
  }
}
</style>
