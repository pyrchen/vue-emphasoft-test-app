<script setup lang="ts">
import { Form } from 'vee-validate';
import { TextInput } from '@/components';
import { IAuthLoginPayload } from '@/interfaces/UsersInterface';
import { LogInSchema } from '@/validation/schemas';
import { useAuthStore } from '@/store/authStore';

const { loginUser } = useAuthStore();

const onSubmit = async (values: IAuthLoginPayload) => {
  await loginUser(values);
};
</script>

<template>
  <div class="auth-wrapper ml-4 mr-4">
    <h2 class="text-center text-h4">Auth Page</h2>
    <Form
      as="v-form"
      class="auth-form"
      @submit="onSubmit"
      :validation-schema="LogInSchema"
    >
      <TextInput label="Username" type="username" name="username"/>
      <TextInput label="Password" type="password" name="password"/>
      <v-btn
        variant="outlined"
        color="primary"
        type="submit"
      >Log In</v-btn>
    </Form>
  </div>
</template>

<style scoped lang="scss">
  .auth-wrapper {
    display: grid;
    align-content: center;
    gap: 30px;
    margin-top: -20px;
    min-height: 100vh;
    overflow: hidden;
  }
  .auth-form {
    display: grid;
    gap: 8px;

    button[type=submit] {
      margin: 10px 0 0 0 !important;
    }
  }

  @media (min-width: 500px) {
    .auth-wrapper {
      margin-left: auto !important;
      margin-right: auto !important;
      max-width: 450px;
    }
  }
</style>
