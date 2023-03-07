export enum USERS_LS_NAMES {
  'AUTH_DATA' = 'AUTH_DATA',
}

export interface IAuthLoginPayload {
  username: string;
  password: string;
}

export interface IActiveUserData extends IAuthLoginPayload {
  token: string;
}

export interface IAuthLoginResponse {
  token: string;
}

export interface IUser {
  first_name: string;
  id: number;
  is_active: boolean;
  is_superuser: boolean;
  last_login: Date | null;
  last_name: string;
  username: string;
}

export interface IMainUserKeys {
  first_name: string;
  is_active: boolean;
  last_name: string;
  username: string;
}

export interface WithPassword {
  password: string;
}

export interface WithToken {
  token: string;
}
