<script setup lang="ts">
defineProps({})
</script>

<template>
  <div class="sort">
    Компонент сортировки новостей
  </div>
</template>

<style scoped lang="scss">
.sort {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0.5rem;
    background: var(--color-black-light);
    border: 2px solid var(--color-grey);
    border-radius: 1rem;
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
