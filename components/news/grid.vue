<script setup lang="ts">
defineProps({
  data: [],
})
</script>

<template>
  <div class="news">
    <NewsItem class="news__item" v-for="item in data" :data="item" />
  </div>
</template>

<style scoped lang="scss">
.news {
  position: relative;
  padding: 0.5rem;
  background: var(--color-black-light);
  border: 2px solid var(--color-grey);
  border-radius: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE и Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  &__item {
    height: 450px;
  }
}
</style>
