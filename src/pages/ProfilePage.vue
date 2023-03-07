<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import VueJsonPretty from 'vue-json-pretty';
import { useAuthStore } from '@/store/authStore';
import { useAppStore } from '@/store/appStore';

const router = useRouter();
const authStore = useAuthStore();
const dialogStore = useAppStore().dialogModule;
const activeUser = computed(() => authStore.activeUser);
const isDialogOpened = computed(() => dialogStore.isDialogOpened);

function logoutFinally() {
  dialogStore.closeDialog();
  authStore.logout();
}
</script>

<template>
  <v-toolbar color="primary" class="align-center">
    <v-container class="d-flex align-center">
      <v-btn
        icon="mdi-arrow-left"
        @click="router.push('/users')"
      />
      <v-spacer></v-spacer>
      <v-btn
        append-icon="mdi-logout-variant"
        @click="dialogStore.openDialog"
      >Logout</v-btn>
    </v-container>
  </v-toolbar>
  <v-container>
    <div>
      <h2 class="text-center text-h4 mb-4">Hello: {{ activeUser.username }}</h2>
      <vue-json-pretty
        v-model:data="activeUser"
      />
    </div>
  </v-container>
  <Teleport v-if="isDialogOpened" to="#dialog">
    <div class="ma-4 text-center text-break">
      <h1 class="text-h4 mb-3">Logging out</h1>
      <p class="text-body-1 text-break mb-3">Do you want to leave this account?</p>
      <v-card-actions class="mt-3 pa-0">
        <v-btn
          @click="dialogStore.closeDialog"
          variant="tonal"
          color="red-darken-1"
        >Cancel</v-btn>
        <v-spacer />
        <v-btn
          @click="logoutFinally"
          variant="tonal"
          color="primary"
        >Yes, Leave</v-btn>
      </v-card-actions>
    </div>
  </Teleport>
</template>

<style scoped>

</style>
