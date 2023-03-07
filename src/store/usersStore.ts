import { defineStore } from 'pinia';
import { IMainUserKeys, IUser, WithPassword } from '@/interfaces/UsersInterface';
import { computed, ref } from 'vue';
import { UsersService } from '@/services/UsersService';
import { useAppStore } from '@/store/appStore';
import { useRouter } from 'vue-router';

function sortById<T extends IUser>(a: T, b: T, isAsc = true) {
  if (isAsc) return a.id - b.id > 0 ? 1 : -1;
  return a.id - b.id < 0 ? 1 : -1;
}

function filterByString(filter: string) {
  return function filterFn(user: IUser) {
    return user.username.toLowerCase().includes(filter.toLowerCase());
  };
}

export const useUsersStore = defineStore('users', () => {
  const router = useRouter();
  const { addOnCondition, addAlert } = useAppStore().alertsModule;

  const users = ref<IUser[]>([]);
  const isFetchedSync = ref<boolean>(false);
  const filterString = ref<string>('');
  const sortingOption = ref<number>(0);
  const activeUserId = ref<number>();
  const userToEdit = ref<IUser>({} as IUser);

  const sortedUsers = computed(
    () => users.value.filter((user) => user.id !== activeUserId.value)
      .sort((a, b) => sortById(a, b, !sortingOption.value)),
  );

  const filteredUsers = computed(() => {
    if (!filterString.value) return sortedUsers.value;
    const filteringFn = filterByString(filterString.value);
    return sortedUsers.value.filter(filteringFn);
  });

  function setUserToEdit(user: IUser) {
    userToEdit.value = user;
  }

  function setActiveUserId(id: number) {
    activeUserId.value = id;
  }

  function setUsers(fetchedUsers: IUser[]) {
    users.value = fetchedUsers;
    isFetchedSync.value = true;
  }

  async function editUser(newUserData: IUser) {
    const { status } = await UsersService.editUser(newUserData.id, { ...newUserData });

    addOnCondition(status < 400, {
      title: 'Successfully changed',
      status: 'success',
    });

    if (users.value.length) {
      const index = users.value.findIndex((user) => user.id === newUserData.id);
      if (index < 0) return;

      users.value[index] = Object.assign(users.value[index], { ...newUserData });
    }

    isFetchedSync.value = false;
  }

  async function createUser(newUserData: IMainUserKeys & WithPassword) {
    const { status } = await UsersService.createUser(newUserData);

    addOnCondition(status < 400, {
      title: 'Successfully deleted',
      status: 'success',
    });

    isFetchedSync.value = false;

    await router.push('/users');
  }

  async function fetchUsers() {
    if (isFetchedSync.value) return;

    const { data, status } = await UsersService.getUsers();

    if (status < 400) setUsers(data || []);
    if (status >= 400 && data.errors) {
      data.errors.forEach((err) => addAlert(err, 'error', 4000));
    }

    return data;
  }

  async function fetchSingleUser(userId: number) {
    const { data } = await UsersService.getOneUser(userId);
    setUserToEdit(data);
    return data;
  }

  async function deleteUser(userId: number) {
    const { status } = await UsersService.deleteUser(userId);

    addOnCondition(status < 400, {
      title: 'Successfully deleted',
      status: 'success',
    });

    if (status < 400) {
      users.value = users.value.filter((user) => user.id !== userId);
      isFetchedSync.value = false;
    }
  }

  return {
    users,
    filteredUsers,
    filterString,
    sortingOption,
    setActiveUserId,
    userToEdit,
    setUserToEdit,
    editUser,
    fetchSingleUser,
    createUser,
    fetchUsers,
    deleteUser,
  };
});
