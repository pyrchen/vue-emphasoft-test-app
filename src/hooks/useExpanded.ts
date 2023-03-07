import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

export const useExpanded = (userId: number) => {
  const route = useRoute();

  const isExpanded = ref<boolean>(!!(route.params.id && userId === +route.params.id));

  watch(() => route.params.id, (newValue) => {
    isExpanded.value = !!(newValue && userId === +newValue);
  });

  return { isExpanded };
};
