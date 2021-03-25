/* eslint-disable prettier/prettier */
import Axios from "axios";
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}

const catsUrl = `${baseUrl}/industries`;
const state = {
  industries: []
};

const getters = {
  allIndustries: state => state.industries
};

const actions = {
  async fetchIndustries(context) {
    context.commit("setIndustries", (await Axios.get(catsUrl)).data);
  }
};

const mutations = {
  setIndustries: (state, industries) => (state.industries = industries)
};

export default {
  state,
  getters,
  actions,
  mutations
};
