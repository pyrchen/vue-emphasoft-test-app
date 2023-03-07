<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { UsersList } from '@/components';
import { useUsersStore } from '@/store/usersStore';
import { useAuthStore } from '@/store/authStore';

const router = useRouter();
const usersStore = useUsersStore();
const authStore = useAuthStore();

const { activeUser } = storeToRefs(authStore);

const menuItems = [
  { key: 'profile', title: 'Go profile', action: () => router.push(`/users/${activeUser.value.username}/profile`) },
  { key: 'create', title: 'Create User', action: () => router.push('/users/create') },
];

const state = reactive({
  loading: false,
});

onMounted(async () => {
  state.loading = true;
  await usersStore.fetchUsers();
  state.loading = false;
});
</script>

<template>
  <v-toolbar color="primary" class="align-center">
    <v-container class="d-flex align-center">
      <v-toolbar-title>All Users</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-if="!state.loading">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>

        <v-list class="menu-list">
          <v-list-item
            v-for="item in menuItems"
            :key="item.key"
            @click="item.action"
            active-color="primary"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-toolbar>
  <v-container>
    <div class="list-wrapper">
      <template v-if="state.loading">Loading...</template>
      <template v-if="!state.loading">
        <UsersList />
      </template>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.main-wrapper {
  display: grid;
  gap: 20px;

  h2 {
    text-align: center;
  }
}
.menu-list {
  padding: 0 !important;
}
</style>
