import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  IAuthLoginPayload,
  IUser,
  USERS_LS_NAMES,
  WithPassword, WithToken,
} from '@/interfaces/UsersInterface';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/store/usersStore';
import { useAppStore } from '@/store/appStore';
import { AuthService } from '@/services/AuthService';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const { addAlert } = useAppStore().alertsModule;
  const { fetchUsers, setActiveUserId } = useUsersStore();

  const activeUser = ref({} as IUser & WithPassword & WithToken);
  const isAuthed = computed<boolean>(() => !!activeUser.value?.token);

  function logout() {
    activeUser.value = {} as IUser & WithPassword & WithToken;
    localStorage.removeItem(USERS_LS_NAMES.AUTH_DATA);
    addAlert('Logged out', 'success');
  }

  function setActiveUser(value: IUser & WithPassword & WithToken) {
    activeUser.value = value;
    localStorage.setItem(USERS_LS_NAMES.AUTH_DATA, JSON.stringify(value));
  }

  function checkAuthorization() {
    const authData = JSON.parse(localStorage.getItem(USERS_LS_NAMES.AUTH_DATA) || '{}');
    if (authData.token) {
      AuthService.authToken = authData.token;
      setActiveUser(authData);
      setActiveUserId(authData.id);
    }
    return { token: authData.token };
  }

  function bindPassword<T>(data: T): T & { password: string; } {
    return { ...data, password: activeUser.value.password };
  }

  async function loginUser(payload: IAuthLoginPayload) {
    const { data: { token, errors }, status } = await AuthService.login(payload);

    if (status >= 400) {
      errors && errors.length && errors.forEach((err) => {
        addAlert(err, 'error', 4000);
      });
      return;
    }

    const fetchedUsers = await fetchUsers();

    if (fetchedUsers && fetchedUsers.length) {
      const activeUser = fetchedUsers.find((user) => user.username === payload.username);
      activeUser && setActiveUserId(activeUser.id);
      activeUser && setActiveUser({ token, password: payload.password, ...activeUser });

      addAlert('Successfully authorized', 'success');

      await router.push('/users');
    }
  }

  return {
    isAuthed,
    activeUser,
    setActiveUser,
    loginUser,
    checkAuthorization,
    logout,
    bindPassword,
  };
});
