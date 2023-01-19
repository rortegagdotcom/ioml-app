import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router";

import 'tailwindcss/tailwind.css'

createApp(App).use(router).mount("#app");
