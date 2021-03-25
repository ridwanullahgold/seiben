import Axios from "axios";
const baseUrl = "http://localhost:9000";
const usersUrl = `${baseUrl}/user`;
const state = {
  // todos: [
  //   {
  //     id: 1,
  //     name: "Go to the mosque"
  //   },
  //   {
  //     id: 2,
  //     name: "Go to the groceries store"
  //   }
  // ]
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchUsers(context) {
    context.commit("setUsers", (await Axios.get(usersUrl)).data);
  },
  async addUser(context, data) {
    context.commit("addUser", (await Axios.post(usersUrl, data)).data);
  },
  async updateUser(context, updUser) {
    context.commit("updateUser", await Axios.put(`${usersUrl}/${updUser._id}`));
  },
  async deleteUser(context, id) {
    context.commit("deleteUser", await Axios.delete(`${usersUrl}/${id}`));
  }
  // async filterUser({commit}, e) {
  //   const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
  //   console.log(limit)
  //   console.log(e)
  //   // context.commit("deleteUser", await Axios.delete(`${usersUrl}/${id}`));
  // }
};

const mutations = {
  setUsers: (state, todos) => (state.todos = todos),
  addUser: (state, todo) => state.todos.unshift(todo),
  deleteUser: (state, id) =>
    (state.todos = state.todos.filter(todo => todo._id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
