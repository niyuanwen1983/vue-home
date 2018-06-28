import * as Types from './mutations-type';

const mutations = {
  [Types.INCREMENT](state, count) {//state是自动放入的，默认值的是当前的state（上面的state）
    if (isNaN(count)) {
      return;
    }
    state.count += count;
  },
  [Types.DECREMENT](state) {
    state.count--;
  }
};

export default mutations;
