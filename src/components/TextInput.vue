<script setup lang="ts">
import { defineProps, toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string;
  type: string;
  label: string;
  modelValue?: string;
}>();

const { value, handleBlur, errorMessage } = useField(toRef(props, 'name'), {}, {
  initialValue: props.modelValue || '',
});
</script>

<template>
  <v-text-field
    v-model.trim="value"
    @blur="handleBlur"
    :label="props.label"
    :error-messages="errorMessage"
    :type="type"
  />
</template>
