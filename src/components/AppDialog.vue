<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/store/appStore';

const dialogStore = useAppStore().dialogModule;
const isDialogOpened = computed(() => dialogStore.isDialogOpened);

</script>

<template>
  <v-dialog
    v-model="isDialogOpened"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    theme="dark"
  >
    <template v-slot:default>
      <div id="dialog"></div>
    </template>
  </v-dialog>
</template>

<style scoped lang="scss">
#dialog {
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
