import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  getters,
  modules:{  //数据的模块
    user
  }
})
export default store