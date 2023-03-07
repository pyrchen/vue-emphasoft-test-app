import { NavigationGuardWithThis } from 'vue-router';
import { useAuthStore } from '@/store/authStore';

export const use404Guard: NavigationGuardWithThis<undefined> = (to, from, next) => {
  const { isAuthed } = useAuthStore();
  if (to.matched.length) return next();

  // no matched route
  if (isAuthed) next('/users');
  else next('/auth');
};
