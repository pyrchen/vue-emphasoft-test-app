import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VuetifyPlugin from '@/third-party/vuetify';
import App from './App.vue';
import router from './router';

import '@/validation/globalRules';
import 'vue-json-pretty/lib/styles.css';

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(VuetifyPlugin)
  .use(pinia)
  .mount('#app');
