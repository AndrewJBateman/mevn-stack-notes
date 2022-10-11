import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";

import VueAxios from "vue-axios";
import axios from "axios";

createApp(App).use(router).use(VueAxios, axios).mount("#app");
