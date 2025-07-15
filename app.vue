<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CookieConsent from '@/components/main/cookie-consent.vue';
import { usePageStore } from '@/stores/store';

const store = usePageStore();
const showCookie = ref(false);

onMounted(() => {
  store.checkCookieAccepted();
  if (!store.cookieAccepted) {
    showCookie.value = true;
  }
});

function acceptCookie() {
  store.setCookieAccepted(true);
  showCookie.value = false;
}
</script>

<template>
  <div>
    <NuxtPage />
    <transition name="cookie-slide">
      <div v-if="showCookie" class="cookie-consent-absolute">
        <CookieConsent @accept="acceptCookie" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.cookie-consent-absolute {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2rem;
  pointer-events: all;
}
.cookie-slide-enter-active, .cookie-slide-leave-active {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s;
}
.cookie-slide-enter-from, .cookie-slide-leave-to {
  transform: translateY(-120%);
  opacity: 0;
}
.cookie-slide-enter-to, .cookie-slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>


