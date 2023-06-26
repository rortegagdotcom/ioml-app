import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router';
import Vue3Toastify, { toast } from 'vue3-toastify';
import i18n from './i18n';

import 'tailwindcss/tailwind.css';
import 'vue3-toastify/dist/index.css';

createApp(App)
  .use(router)
  .use(Vue3Toastify, {
    autoClose: 1000,
    theme: 'colored',
    position: toast.POSITION.BOTTOM_CENTER,
    transition: 'slide',
    hideProgressBar: true,
    newestOnTop: false,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: true,
    pauseOnHover: false,
  })
  .use(i18n)
  .mount('#app');
