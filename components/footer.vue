<script setup lang="ts"></script>

<template>
  <div class="footer">
    <h2 class="footer__title">Все права сохранены</h2>
    <p class="footer__subtitle">FEMC 2025</p>
  </div>
</template>

<style scoped lang="scss">
.footer {
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

  &__subtitle {
    font-size: 12px;
  }
}
</style>