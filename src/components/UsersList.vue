<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useDisplay } from 'vuetify';
import VueJsonPretty from 'vue-json-pretty';
import UserCard from '@/components/UserCard.vue';
import { IUser } from '@/interfaces/UsersInterface';
import { useUsersStore } from '@/store/usersStore';
import { useAppStore } from '@/store/appStore';

const { mobile } = useDisplay();
const usersStore = useUsersStore();
const dialogStore = useAppStore().dialogModule;
const { isDialogOpened } = storeToRefs(dialogStore);
const { filterString, filteredUsers, sortingOption } = storeToRefs(usersStore);

const userToDelete = ref<IUser>();

const openModalForDelete = (user: IUser) => {
  userToDelete.value = user;
  if (!userToDelete.value) return;
  dialogStore.openDialog();
};

const deleteUserFinally = async () => {
  if (!userToDelete.value) return;
  await usersStore.deleteUser(userToDelete.value?.id);
  dialogStore.closeDialog();
};
</script>

<template>
  <div class="d-flex align-center justify-space-between mb-2">
    <h3
      :class="{
        'text-heading-h6': !mobile,
        'text-body-1': mobile,
      }"
    >Sorted by "ID"</h3>
    <v-btn-toggle
      v-model="sortingOption"
      shaped
      mandatory
    >
      <template v-if="mobile">
        <v-btn icon="mdi-arrow-up"/>
        <v-btn icon="mdi-arrow-down"/>
      </template>
      <template v-else>
        <v-btn
          prepend-icon="mdi mdi-arrow-up"
        >ACS</v-btn>
        <v-btn
          prepend-icon="mdi mdi-arrow-down"
        >DESC</v-btn>
      </template>
    </v-btn-toggle>
  </div>
  <v-text-field
    label='Search by "username"'
    prepend-inner-icon="mdi mdi-magnify"
    variant="outlined"
    v-model="filterString"
  />
  <div
    v-if="filteredUsers.length"
    class="users-list"
  >
    <UserCard
      v-for="user in filteredUsers"
      :key="user.id"
      :user="user"
      @deleteUser="openModalForDelete"
    />
  </div>
  <div v-else>
    <h2
      class="text-center text-h5 text-break"
    >
      No users{{ filterString ? ` found: ${filterString}` : ''}}
    </h2>
  </div>
  <Teleport v-if="isDialogOpened" to="#dialog">
    <div class="ma-4 text-center text-break">
      <h1 class="text-h4 mb-3">Deleting user</h1>
      <h2 class="text-h5 mb-3 bg-secondary rounded">{{ userToDelete.username }}</h2>
      <p class="text-body-1 text-break mb-3">Are you sure of deleting this account?</p>
      <vue-json-pretty
        v-model:data="userToDelete"
        :editable="false"
      />
      <v-card-actions class="mt-3 pa-0">
        <v-btn
          @click="dialogStore.closeDialog"
          variant="tonal"
          color="red-darken-1"
        >Cancel</v-btn>
        <v-spacer />
        <v-btn
          @click="deleteUserFinally"
          variant="tonal"
          color="primary"
        >Yes, Delete</v-btn>
      </v-card-actions>
    </div>
  </Teleport>
</template>

<style scoped>
.users-list {
  display: grid;
  gap: 15px;
  padding-bottom: 30px;
}
</style>
