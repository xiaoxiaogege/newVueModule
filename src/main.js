import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import "amfe-flexible";

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

import api from "./api";
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

