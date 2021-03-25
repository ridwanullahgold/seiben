/* eslint-disable prettier/prettier */
import Axios from "axios";
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}

const catsUrl = `${baseUrl}/categories`;
const state = {
  categories: []
};

const getters = {
  allCategories: state => state.categories
};

const actions = {
  async fetchCategories(context) {
    context.commit("setCategories", (await Axios.get(catsUrl)).data);
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
