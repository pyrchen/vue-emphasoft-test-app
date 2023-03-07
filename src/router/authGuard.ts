import { NavigationGuardWithThis } from 'vue-router';
import { useAuthStore } from '@/store/authStore';

export const useAuthGuard: NavigationGuardWithThis<undefined> = (to, from, next) => {
  const { isAuthed } = useAuthStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuthed) return next();
    next('/auth');
  } else if (to.matched.some((record) => record.meta.restrictedForAuthed) && isAuthed) {
    next('/users');
  } else {
    next();
  }
};
