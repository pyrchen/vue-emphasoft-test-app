<script setup lang="ts">
import {
  computed,
  defineEmits,
  defineProps,
  provide,
  reactive,
} from 'vue';
import { IUser } from '@/interfaces/UsersInterface';
import { useRouter } from 'vue-router';
import { useExpanded } from '@/hooks/useExpanded';

const router = useRouter();

const props = defineProps<{
  user: IUser,
}>();

const expanded = useExpanded(props.user.id);
const isExpanded = computed(() => expanded.isExpanded);

const emit = defineEmits(['deleteUser']);

const state = reactive({
  isExpanded: isExpanded.value,
  user: Object.assign({}, props.user),
});

const toggleExpanding = () => {
  router.push(!state.isExpanded ? `/users/${props.user.id}` : '/users');
  state.isExpanded = !state.isExpanded;
};

provide('chosenUser', props.user);
</script>

<template>
  <v-card
    class="user-card w-100"
  >
    <v-card-title>{{ user.username }}</v-card-title>

    <v-card-actions>
      <v-btn
        color="red-darken-2"
        variant="tonal"
        @click="emit('deleteUser', user)"
      >Delete</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :icon="state.isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="toggleExpanding"
      ></v-btn>
    </v-card-actions>

    <router-view></router-view>
  </v-card>
</template>

<style scoped>
.user-card {
  margin: 0;
}
</style>
