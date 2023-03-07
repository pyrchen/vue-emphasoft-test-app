<script setup lang="ts">
import { computed, onBeforeMount, watch } from 'vue';
import { useRouter } from 'vue-router';
import { AlertsList, AppDialog } from '@/components';
import { useAuthStore } from '@/store/authStore';

const router = useRouter();
const authStore = useAuthStore();
const isAuthed = computed(() => authStore.isAuthed);

watch(isAuthed, (isAuthedNew) => {
  if (!isAuthedNew) {
    router.push('/auth');
  }
});

onBeforeMount(() => {
  authStore.checkAuthorization();
});
</script>

<template>
  <router-view/>
  <AlertsList />
  <AppDialog />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  min-height: 100vh;
}
</style>
