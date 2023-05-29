import { createStore } from "vuex";
import { user } from "./modules/user";
// import { cart } from "./modules/cart";

const store = createStore({
  modules: {
    user,
  },

  state() {
    return {};
  },

  getters: {},
  mutations: {},
  actions: {},
});

export default store;
