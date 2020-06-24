import Vue from 'vue'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);
Vue.use(VueFilterDateFormat);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
