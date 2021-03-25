/* eslint-disable no-unused-vars */
import Axios from "axios";
// import baseUrl from './../../utils/axios'
import authHeader from "./authHeader";
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}

const userUrl = `${baseUrl}/user`;
const companyUrl = `${baseUrl}/user/company`;
const companiesUrl = `${baseUrl}/user/companies`;

const state = {
  users: []
};
const getters = {
  allUsers: state => state.users
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  add_photo(state, users) {
    state.user = users;
  }
};
const actions = {
  async fetchProfiles({ commit }) {
    return (await Axios.get(userUrl, { headers: authHeader() })).data;
  },

  async fetchCompany({ commit }, { cat }) {
    return (await Axios.get(companyUrl + "/" + cat)).data;
  },
  async fetchCompanies({ commit }, { cat }) {
    return (await Axios.get(companiesUrl + "/" + cat)).data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
