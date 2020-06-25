import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
