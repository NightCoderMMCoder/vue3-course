import { createStore } from "vuex";
import Meals from "./Meals";

export default createStore({
  state: {
    count: 0,
  },
  actions: {},
  mutations: {},
  modules: {
    Meals,
  },
});
