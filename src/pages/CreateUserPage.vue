<script setup lang="ts">
import { useRouter } from 'vue-router';
import VueJsonPretty from 'vue-json-pretty';
import { useField, useForm } from 'vee-validate';
import { TextInput } from '@/components';
import { EditUserSchema } from '@/validation/schemas';
import { IMainUserKeys } from '@/interfaces/UsersInterface';
import { useUsersStore } from '@/store/usersStore';
import { useAuthStore } from '@/store/authStore';
import { useAppStore } from '@/store/appStore';

const router = useRouter();
const { createUser } = useUsersStore();
const { bindPassword } = useAuthStore();
const { addAlert } = useAppStore().alertsModule;

const { values, handleSubmit, resetForm } = useForm<IMainUserKeys>({
  validationSchema: EditUserSchema,
});

const { value: isActiveValue } = useField('is_active', {}, {
  initialValue: false,
});

const doFormReset = () => {
  resetForm();
  addAlert('Form reset', 'warning');
};

const onSubmit = handleSubmit(async (values) => {
  await createUser(bindPassword(values));
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
    <h2 class="mb-3 text-center">New User Form</h2>
    <vue-json-pretty
      v-model:data="values"
      :editable="false"
    />
    <v-divider class="mb-2 mt-2"/>
    <v-form @submit="onSubmit">
      <TextInput label="Username" type="text" name="username" />
      <TextInput label="First Name" type="text" name="first_name" />
      <TextInput label="Last Name" type="text" name="last_name" />
      <v-checkbox
        v-model:model-value="isActiveValue"
        name="is_active"
        :label="`Is Active: ${isActiveValue}`"
        color="primary"
        hide-details
      ></v-checkbox>
      <v-divider />
      <v-card-actions class="pa-0">
        <v-btn
          color="red-darken-1"
          @click="doFormReset"
        >Reset</v-btn>
        <v-spacer />
        <v-btn
          color="success"
          type="submit"
        >Create</v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>
