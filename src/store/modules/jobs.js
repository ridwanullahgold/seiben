/* eslint-disable no-unused-vars */
import Axios from "axios";
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}
const jobsUrl = `${baseUrl}/employer/jobs`;
const userUrl = `${baseUrl}/jobs`;
const catsUrl = `${baseUrl}/jobs/cats`;
const levelsUrl = `${baseUrl}/jobs/levels`;
const featureUrl = `${baseUrl}/jobs/featured`;
import authHeader from "./authHeader";

const state = {
  jobs: []
};

const getters = {
  allJobs: state => state.jobs
};

const actions = {
  async getAlJobs(context) {
    context.commit("setJobs", (await Axios.get(jobsUrl)).data);
  },
  async getAllJobs({ commit }) {
    return (await Axios.get(jobsUrl)).data;
  },
  async getFeaturedJobs({ commit }) {
    return (await Axios.get(featureUrl)).data;
  },
  async addJobAction({ commit }, user) {
    return Axios.post(jobsUrl, user, { headers: authHeader() }).then(
      user => {
        return Promise.resolve(user);
      },
      error => {
        return Promise.reject(error);
      }
    );
  },
  async updateJobAction({ commit }, user) {
    return Axios.put(jobsUrl + "/" + user.cat, user, {
      headers: authHeader()
    }).then(
      user => {
        return Promise.resolve(user);
      },
      error => {
        return Promise.reject(error);
      }
    );
  },
  async applyJobAction({ commit }, user) {
    return Axios.put(jobsUrl + "/apply/" + user.id, user, {
      headers: authHeader()
    }).then(
      user => {
        return Promise.resolve(user);
      },
      error => {
        return Promise.reject(error);
      }
    );
  },
  async shortlistJobAction({ commit }, user) {
    return Axios.put(jobsUrl + "/shortlist/" + user.id, user, {
      headers: authHeader()
    }).then(
      user => {
        return Promise.resolve(user);
      },
      error => {
        return Promise.reject(error);
      }
    );
  },
  async fetchJobs({ commit }, { cat }) {
    return (
      await Axios.get(jobsUrl + "/user/" + cat, { headers: authHeader() })
    ).data;
  },
  async getJobs({ commit }, { cat }) {
    return (await Axios.get(userUrl + "/users/" + cat)).data;
  },
  async fetchJob({ commit }, { cat }) {
    return (await Axios.get(jobsUrl + "/" + cat)).data;
  },
  async fetchAllJobs({ commit }) {
    return (await Axios.get(userUrl + "/user", { headers: authHeader() })).data;
  },
  async fetchCats({ commit }) {
    return (await Axios.get(catsUrl)).data;
  },
  async fetchLevels({ commit }) {
    return (await Axios.get(levelsUrl)).data;
  },

  async fetchNewJobs(context) {
    context.commit(
      "setJobs",
      (await Axios.get(jobsUrl + "/user/", { headers: authHeader() })).data
    );
  },

  async deleteJob(context, id) {
    context.commit(
      "deleteJobs",
      await Axios.delete(jobsUrl + "/user/" + id, { headers: authHeader() })
    );
  }
  // async filterUser({commit}, e) {
  //   const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
  //   console.log(limit)
  //   console.log(e)
  //   // context.commit("deleteUser", await Axios.delete(`${usersUrl}/${id}`));
  // }
};

const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
  addUser: (state, todo) => state.todos.unshift(todo),
  deleteJobs: (state, id) =>
    (state.jobs = state.jobs.filter(job => job._id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
