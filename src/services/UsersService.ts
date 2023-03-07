import { RootService } from '@/services/RootService';
import { IUser } from '@/interfaces/UsersInterface';

class UsersServiceClass {
  constructor(private rootService = RootService) {}
  getUsers() {
    return this.rootService.get<IUser[]>('/users');
  }

  getOneUser(userId: number) {
    return this.rootService.get<IUser>(`/users/${userId}`);
  }

  createUser(newUserData: Partial<IUser>) {
    return this.rootService.post<Partial<IUser>>('/users', newUserData);
  }

  editUser(userId: number, newUserData: Partial<IUser>) {
    return this.rootService.put<Partial<IUser>>(`/users/${userId}`, newUserData);
  }

  deleteUser(userId: number) {
    return this.rootService.delete(`/users/${userId}`);
  }
}

const UsersService = new UsersServiceClass();

export { UsersService };
