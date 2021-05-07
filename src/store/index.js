import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increaseCount(state) {
      state.count++;
    },
  },
  actions: {},
  getters: {
    count(state) {
      return state.count;
    },
  },
  modules: {},
});
