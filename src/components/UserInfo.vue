<script setup lang="ts">
import { computed, inject, reactive } from 'vue';
import VueJsonPretty from 'vue-json-pretty';
import { useRouter } from 'vue-router';
import { IUser } from '@/interfaces/UsersInterface';
import { useExpanded } from '@/hooks/useExpanded';
import { useUsersStore } from '@/store/usersStore';
import { useAuthStore } from '@/store/authStore';

const router = useRouter();

const { editUser, setUserToEdit } = useUsersStore();
const { bindPassword } = useAuthStore();

const user = inject<IUser>('chosenUser')!;

const expanded = useExpanded(user.id);
const isExpanded = computed(() => expanded.isExpanded);

const state = reactive({
  isExpanded: isExpanded.value,
  isUserEditable: false,
  userData: { ...user } as IUser,
});

const onSaveChanges = () => {
  state.isUserEditable = false;
  editUser(bindPassword(state.userData));
};

const onCancelChanges = () => {
  state.isUserEditable = false;
  state.userData = { ...user } as IUser;
};

const goToEditUser = () => {
  setUserToEdit({ ...user });
  router.push(`/users/${user.id}/edit`);
};
</script>

<template>
  <div v-show="state.isExpanded">
    <v-divider></v-divider>
    <v-card-text>
      <vue-json-pretty
        v-model:data="state.userData"
        :show-double-quotes="true"
        :show-line="true"
        :show-line-number="true"
        :editable="state.isUserEditable"
        :show-select-controller="false"
        editable-trigger="click"
      />
    </v-card-text>
    <v-card-actions class="justify-space-between">
      <v-btn
        v-if="!state.isUserEditable"
        color="primary"
        prepend-icon="mdi mdi-account-edit"
        variant="tonal"
        @click="goToEditUser"
      >Edit User</v-btn>
      <template v-if="state.isUserEditable">
        <v-btn
          color="red-darken-1"
          variant="tonal"
          @click="onCancelChanges"
        >Cancel</v-btn>
        <v-btn
          color="green-darken-1"
          variant="tonal"
          @click="onSaveChanges"
        >Save</v-btn>
      </template>
    </v-card-actions>
  </div>
</template>

<style scoped>

</style>
