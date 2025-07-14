<script setup lang="ts"></script>

<template>
  <div class="map">
    <h2 class="map__title">Разработка компонента карты</h2>
  </div>
</template>

<style scoped lang="scss">
.map {
    width: 100%;
    height: 100%;
    position: relative;
    background: var(--color-black-light);
    border-radius: 1rem;
    border: 2px solid var(--color-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__title {
        font-size: 2rem;
        font-weight: 700;
    }
}
</style>

