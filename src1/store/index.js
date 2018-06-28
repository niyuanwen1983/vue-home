import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import mutations from './mutations';

Vue.use(Vuex);
//容器是唯一的
const state = {count: 0};
const getters = {
  val: (state) => state.count % 2 ? '奇数' : '偶数'
}

export default new Vuex.Store({
  state: state,
  mutations,
  plugins: [logger()],
  getters,
  strict: true//只能通过mutation（管理员）来更改状态，mutation不支持异步
});
