<script setup lang="ts">
import { ref } from 'vue';
import { usePageStore } from '@/stores/store';
const props = defineProps({
  stats: Object,
  serverId: String,
})

const store = usePageStore();
const serverStatus = ref(store.getServerStatus(props.serverId!));
const playersOnline = serverStatus.value?.playerNames[0] ? '' : serverStatus.value?.playerNames[0].split(" ");
</script>

<template>
  <div class="players-online">
    <!-- <div v-if="serverStatus?.playerNames" class="players-online__players">
      <div class="players-online__item" v-for="item in playersOnline">{{ item }}</div>
    </div> -->
    <div class="players-online__item item" v-for="item in 6">

    </div>
  </div>
</template>

<style scoped lang="scss">
.players-online {
  padding: 8px;
  position: relative;
  background: var(--color-black-light);
  border-radius: 1rem;
  border: 2px solid var(--color-grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8px;
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE и Edge */

  &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
  }

  &__players {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
  }

  &__title {
    width: 100%;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--color-grey);
  }

  &__item {
    width: 100%;
    height: 2.5rem;
    background: var(--color-grey-dark);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
  }
}

.item {
  background-color: rgb(54, 54, 54);
  width: 100%;
  height: 50px;
}
</style>

