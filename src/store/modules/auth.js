import Axios from "axios";
// import VueJwtDecode from "vue-jwt-decode";
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}

import authHeader from "./authHeader";
const loginUrl = `${baseUrl}/auth`;
const registerUrl = `${baseUrl}/auth/register`;
const forgotUrl = `${baseUrl}/auth/forgot`;
const resetUrl = `${baseUrl}/auth/reset/`;
const confirmUrl = `${baseUrl}/auth/confirm/`;
const updateMeUrl = `${baseUrl}/auth/updatePassword`;
const usersUrl = `${baseUrl}/user/profile`;
const myprofileUrl = `${baseUrl}/user/myprofile`;

// const users = JSON.parse(Cookie.get("jwt"))

// const user = JSON.parse(localStorage.getItem("user"));
// const token = users.token;
let state;
let users;
if (users) {
  const user = users.user;
  state = users
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };
} else {
  state = { status: { loggedIn: false }, user: null };
}

const getters = {};

const actions = {
  registerUserAction({ commit }, user) {
    return Axios.post(registerUrl, user).then(
      user => {
        return Promise.resolve(user);
      },
      error => {
        commit("auth_failed");
        return Promise.reject(error);
      }
    );
  },
  confirmEmail({ commit }, user) {
    return Axios.patch(confirmUrl + user.token, user).then(
      user => {
        const token = user.data.token;
        const users = user.data.user;
        commit("auth_success", { token, users });
        return Promise.resolve(user);
      },
      error => {
        commit("auth_failed");
        return Promise.reject(error);
      }
    );
  },

  LogInAction({ commit }, user) {
    return Axios.post(loginUrl, user).then(
      user => {
        const token = user.data.token;
        const users = user.data.user;
        commit("auth_success", { token, users });
        return Promise.resolve(user);
      },
      error => {
        commit("auth_failed");
        return Promise.reject(error);
      }
    );
  },

  ForgotPassword({ commit }, user) {
    return Axios.post(forgotUrl, user).then(
      user => {
        return Promise.resolve(user);
      },
      error => {
        commit("auth_failed");
        return Promise.reject(error);
      }
    );
  },
  resetPasswordAction({ commit }, user) {
    return Axios.patch(resetUrl + user.token, user).then(
      user => {
        return Promise.resolve(user);
      },
      error => {
        commit("auth_failed");
        return Promise.reject(error);
      }
    );
  },
  updatePasswordAction({ commit }, user) {
    return Axios.patch(updateMeUrl, user, { headers: authHeader() }).then(
      user => {
        const token = user.data.token;
        const users = user.data.user;
        commit("auth_success", { token, users });
        return Promise.resolve(user);
      },
      error => {
        commit("auth_failed");
        return Promise.reject(error);
      }
    );
  },

  LogOutAction(context) {
    localStorage.removeItem("jwt");
    context.commit("logout");
  },
  async updateProfileAction({ commit }, user) {
    return Axios.patch(usersUrl, user, {
      headers: authHeader()
    }).then(
      user => {
        const users = user.data.data;
        commit("add_photo", users);
        return Promise.resolve(user);
      },
      error => {
        return Promise.reject(error);
      }
    );
  },
  // eslint-disable-next-line no-unused-vars
  async updateMyProfileAction({ commit }, user) {
    return Axios.patch(myprofileUrl, user, {
      headers: authHeader()
    }).then(
      user => {
        const users = user.data.data;
        commit("add_photo", users);
        return Promise.resolve(user);
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
};

const mutations = {
  setAuthenticated: state => (state.authenticated = true),
  auth_success(state, info) {
    state.success = true;
    state.user = info.users;
    state.token = info.token;
    state.status.loggedIn = true;
  },
  add_photo(state, users) {
    state.user = users;
  },
  auth_failed(state) {
    state.status.loggedIn = false;
    state.user = null;
  },
  logout(state) {
    state.status.loggedIn = false;
    state.user = null;
    state.token = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
