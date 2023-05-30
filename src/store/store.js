import { createStore } from "vuex";
import { user } from "./modules/user";
import { products } from "./modules/products";
// import { cart } from "./modules/cart";

const store = createStore({
  modules: {
    user,
    products,
  },

  state() {
    return {};
  },

  getters: {},
  mutations: {},
  actions: {},
});

export default store;
