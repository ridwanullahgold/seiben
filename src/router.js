import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/admin/Admin.vue";
import AdminPage from "./views/admin/Products.vue";
import ProductEditor from "./views/admin/ProductEditor.vue";
import Job from "./views/Job.vue";
import Product from "./components/Products.vue";
import Shoppingcart from "./views/Shoppingcart.vue";
import Checkout from "./components/Checkout.vue";
import Thanks from "./components/Thanks.vue";
import MyPassword from "./views/candidate/MyPassword.vue";
import Dashboard from "./views/candidate/Dashboard.vue";

import dataStore from "./store";
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      meta: { title: "Search Jobs" },
      component: () => import("./views/Search.vue"),
      props: route => ({ query: route.query.q })
    },
    {
      path: "/jobdetails/:id",
      name: "jobdetails",
      meta: { title: "Job Details" },
      component: () => import("./views/Jobdetails.vue")
    },
    {
      path: "/company-profile/:id",
      name: "company",
      meta: { title: "Company Profile" },
      component: () => import("./views/Company.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: { title: "Login" },
      component: () => import("./views/auth/Login.vue")
    },
    {
      path: "/signup",
      name: "signUp",
      meta: { title: "SignUp" },
      component: () => import("./views/auth/Signup.vue")
    },
    {
      path: "/forgot-password",
      name: "Forgot",
      meta: { title: "Forgot Password" },
      component: () => import("./views/auth/Forgot.vue")
    },
    {
      path: "/reset-password/:token",
      name: "Reset",
      meta: { title: "Reset Password" },
      component: () => import("./views/auth/Reset.vue")
    },
    {
      path: "/confirm-email/:token",
      name: "ConfirmEmail",
      meta: { title: "Confirming Email" },
      component: () => import("./views/auth/Confirm.vue")
    },
    {
      path: "/change",
      component: MyPassword
    },
    {
      path: "/candidate",
      // name: "Candidate",
      // meta: { title: "Candidate- Welcome" },
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (dataStore.state.auth.status.loggedIn == true) {
          if (dataStore.state.auth.user.role == "Employer") {
            next("/employer/");
          } else if (dataStore.state.auth.user.role === "Admin") {
            next("/admin/");
          }
          next();
        } else {
          next("/login");
        }
      },
      children: [
        {
          path: "profile",
          component: () => import("./views/candidate/Profile.vue")
        },
        {
          path: "change-my-password",
          component: () => import("./views/candidate/MyPassword.vue")
        },
        {
          path: "*",
          component: () => import("./views/candidate/Profile.vue")
        }
      ]
    },
    {
      path: "/employer",
      name: "Employer",
      meta: { title: "Employer- Welcome" },
      component: () => import("./views/employer/Dashboard.vue"),
      beforeEnter(to, from, next) {
        if (dataStore.state.auth.status.loggedIn == true) {
          if (dataStore.state.auth.user.role === "Candidate") {
            next("/candidate/");
          } else if (dataStore.state.auth.user.role === "Admin") {
            next("/admin/");
          }
          next();
        } else {
          next("/login");
        }
      },
      children: [
        {
          path: "dashboard",
          component: () => import("./views/employer/Main.vue")
        },
        {
          path: "profile",
          component: () => import("./views/employer/Profile.vue")
        },
        {
          path: "jobs/:op(add|edit)/:id?",
          component: () => import("./views/employer/AddNewJob.vue")
        },
        {
          path: "jobs/",
          component: () => import("./views/employer/PostedJobs.vue")
        },
        {
          path: "resumes",
          component: () => import("./views/employer/Resume.vue")
        },
        {
          path: "change-my-password",
          component: () => import("./views/employer/MyPassword.vue")
        },
        {
          path: "*",
          component: () => import("./views/employer/Main.vue")
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      meta: { title: "Skills - MyApp" },
      component: () => import("./views/About.vue")
    },
    {
      path: "/todos",
      name: "todos",
      component: () => import("./views/Todos.vue")
    },
    {
      path: "/categories/:category",
      name: "Product",
      component: Product
    },
    {
      path: "/job",
      name: "job",
      component: Job
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      beforeEnter(to, from, next) {
        if (dataStore.state.auth.authenticated == true) {
          next();
        } else {
          next("/login");
        }
      },
      children: [
        { path: "products", component: AdminPage },
        { path: "products/:op(add|edit)/:id?", component: ProductEditor },
        { path: "*", component: AdminPage }
      ]
    },
    {
      path: "/cart",
      name: "shoppingcart",
      component: Shoppingcart
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout
    },
    {
      path: "/thanks",
      name: "thanks",
      component: Thanks
    },
    {
      path: "*",
      component: Home
    }
  ]
});
