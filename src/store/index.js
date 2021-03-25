import Vue from "vue";
import Vuex from "vuex";
// import Axios from "axios";
import users from "./modules/users";
import todos from "./modules/todos";
import categories from "./modules/categories";
import industries from "./modules/industries";
import products from "./modules/products";
import cart from "./modules/cart";
import orders from "./modules/orders";
import auth from "./modules/auth";
import jobs from "./modules/jobs";
import utils from "./modules/utils";
Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";

// const baseUrl = "http://localhost:9000";
// const usersUrl = `${baseUrl}/api`;

export default new Vuex.Store({
  modules: {
    todos,
    users,
    categories,
    industries,
    products,
    cart,
    orders,
    auth,
    jobs,
    utils
  },
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== 'production'
});
