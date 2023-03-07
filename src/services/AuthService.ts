import { RootService } from '@/services/RootService';
import { IAuthLoginPayload, IAuthLoginResponse } from '@/interfaces/UsersInterface';

class AuthServiceClass {
  constructor(private rootService = RootService) {}
  async login(payload: IAuthLoginPayload) {
    const response = await this.rootService.post<IAuthLoginResponse>('/login', payload);
    if (response.status < 400) {
      this.rootService.authToken = response.data.token || '';
    }
    return response;
  }

  set authToken(value: string) {
    this.rootService.authToken = value;
  }
}

const AuthService = new AuthServiceClass();

export { AuthService };
