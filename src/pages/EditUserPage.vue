<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import { TextInput } from '@/components';
import { IMainUserKeys, IUser } from '@/interfaces/UsersInterface';
import { EditUserSchema } from '@/validation/schemas';
import { useUsersStore } from '@/store/usersStore';
import { useAppStore } from '@/store/appStore';
import { useAuthStore } from '@/store/authStore';

const router = useRouter();
const route = useRoute();
const usersStore = useUsersStore();
const alertsStore = useAppStore().alertsModule;
const { bindPassword } = useAuthStore();
const { userToEdit } = storeToRefs(usersStore);

const initialUser = ref<IUser>({ ...userToEdit.value });

const { handleSubmit } = useForm<IMainUserKeys>({
  validationSchema: EditUserSchema,
});

const onSubmit = handleSubmit(() => {
  if (
    JSON.stringify({ ...initialUser.value }) === JSON.stringify({ ...userToEdit.value })
  ) return alertsStore.addAlert("Can't save non-changed data", 'warning');

  usersStore.editUser(bindPassword(userToEdit.value));
  router.push(`/users/${userToEdit.value.id}`);
});

onMounted(async () => {
  if (!userToEdit.value || !userToEdit.value.id) {
    const user = await usersStore.fetchSingleUser(+route.params.id);
    if (user) initialUser.value = { ...user };
  }
});
</script>

<template>
  <v-toolbar color="primary">
    <v-container class="d-flex align-center">
      <v-btn
        icon="mdi-arrow-left"
        @click="router.push('/users/create')"
      />
    </v-container>
  </v-toolbar>
  <v-container>
    <h2 class="mb-3 text-center">Edit User Page</h2>
    <v-divider class="mb-2 mt-2"/>
    <v-form @submit="onSubmit" class="form" v-if="userToEdit.id">
      <TextInput
        v-model="userToEdit.username"
        label="Username"
        type="text"
        name="username"
      />
      <TextInput
        v-model="userToEdit.first_name"
        label="First Name"
        type="text"
        name="first_name"
      />
      <TextInput
        v-model="userToEdit.last_name"
        label="Last Name"
        type="text"
        name="last_name"
      />
      <v-checkbox
        v-model="userToEdit.is_active"
        name="is_active"
        :label="`Is Active: ${userToEdit.is_active}`"
        color="primary"
        hide-details
      ></v-checkbox>
      <v-divider />
      <v-card-actions class="pa-0">
        <v-btn
          color="red-darken-1"
          variant="tonal"
          @click="router.back()"
        >Cancel Edit</v-btn>
        <v-spacer />
        <v-btn
          color="success"
          variant="tonal"
          type="submit"
        >Save</v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<style scoped>
.form {
  display: grid;
  gap: 8px;
}
</style>
