import Axios from "axios";
const baseUrl = "http://localhost:9000";
const catsUrl = `${baseUrl}/orders`;
const state = {
  orders: []
};

const getters = {
  allOrders: state => state.orders
};

const actions = {
  async storeOrderAction(context, order) {
    return (await Axios.post(catsUrl, order)).data;
  }
};

const mutations = {
  setCategories: (state, categories) => (state.categories = categories)
};

export default {
  state,
  getters,
  actions,
  mutations
};
