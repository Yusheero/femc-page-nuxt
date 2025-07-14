<script setup></script>

<template>
  <div class="servers-page">

  </div>
</template>

<style scoped lang="scss">
.servers-page {
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas:
    "info info players map  map"
    "info info players map  map"
    "news news news    news news";
  gap: 0.8rem;
  padding: 0.8rem;
  background: var(--color-black);
  color: var(--color-secondary);

  &__info {
    grid-area: info;
  }

  &__players {
    grid-area: players;
  }

  &__map {
    grid-area: map;
  }

  &__news {
    grid-area: news;
  }
}
</style>


