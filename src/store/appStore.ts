import { ref } from 'vue';
import { defineStore } from 'pinia';
import { alertType, IAlert, IAlertNoId } from '@/interfaces/AppInterface';

const alertsModule = defineStore('alerts', () => {
  const alerts = ref<Array<IAlert>>([]);

  function addAlert(title: string, status: alertType, delay = 2000) {
    if (alerts.value.length >= 5) {
      alerts.value.shift();
    }

    alerts.value.push({ title, status, id: Math.random() * 10000 });

    setTimeout(() => {
      alerts.value.pop();
    }, delay);
  }

  function addOnCondition(condition: boolean, onTrue: IAlertNoId, onFalse = {
    title: 'Something went wrong. Try again, please',
    status: 'error',
  } as IAlertNoId) {
    if (condition) {
      return addAlert(onTrue.title, onTrue.status);
    }
    onFalse && addAlert(onFalse.title, onFalse.status);
  }

  return { alerts, addAlert, addOnCondition };
});

const dialogModule = defineStore('dialog', () => {
  const isDialogOpened = ref<boolean>(false);

  const openDialog = () => {
    isDialogOpened.value = true;
  };

  const closeDialog = () => {
    isDialogOpened.value = false;
  };

  return { isDialogOpened, openDialog, closeDialog };
});

export const useAppStore = () => ({
  alertsModule: alertsModule(),
  dialogModule: dialogModule(),
});
