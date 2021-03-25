import Axios from "axios";
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}
const catsUrl = `${baseUrl}/utils`;
const state = {
  utils: []
};

const getters = {
  allUtils: state => state.utils
};

const actions = {
  async fetchUtils(context) {
    context.commit("setUtils", (await Axios.get(catsUrl)).data);
  }

};

const mutations = {
  setUtils: (state, utils) => (state.utils = utils)
};

export default {
  state,
  getters,
  actions,
  mutations
};
