export type alertType = 'success' | 'error' | 'warning';

export interface IAlert {
  id: number;
  title: string;
  status: alertType;
}

export type IAlertNoId = Omit<IAlert, 'id'>
