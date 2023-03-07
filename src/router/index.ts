import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { AuthPage, MainPage } from '@/pages';
import { useAuthGuard } from '@/router/authGuard';
import { use404Guard } from '@/router/404Guard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/users',
    meta: { requiresAuth: true, title: 'Users' },
    component: MainPage,
    children: [
      {
        path: ':id',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "User Info" */ '../components/UserInfo.vue'),
      },
    ],
  },
  {
    path: '/auth',
    meta: { restrictedForAuthed: true, title: 'Authorization' },
    component: AuthPage,
  },
  {
    path: '/users/:username/profile',
    meta: { requiresAuth: true, title: 'Profile' },
    component: () => import(/* webpackChunkName: "Profile" */ '../pages/ProfilePage.vue'),
  },
  {
    path: '/users/create',
    meta: { requiresAuth: true, title: 'Create User' },
    component: () => import(/* webpackChunkName: "Create" */ '../pages/CreateUserPage.vue'),
  },
  {
    path: '/users/:id(\\d+)/edit',
    meta: { requiresAuth: true, title: 'Edit User' },
    component: () => import(/* webpackChunkName: "Edit" */ '../pages/EditUserPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/vue-emphasoft-test-app/' : '/'),
  routes,
  strict: true,
});

router.beforeEach(useAuthGuard);
router.beforeEach(use404Guard);

export default router;
