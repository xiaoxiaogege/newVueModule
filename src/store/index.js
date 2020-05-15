import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import dome from './modules/dome.js'
export default new Vuex.Store({
  state:{
  },
  mutations:{},
  getters:{},
  modules: {
    dome
  },
  strict: true //状态变更且不是由 mutation 函数引起的，将会抛出错误。
});
