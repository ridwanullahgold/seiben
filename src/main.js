import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// Import Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
// use BootstrapVue
Vue.use(BootstrapVue);
// import plugin
import VueToastr from "vue-toastr";
// use plugin
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});

import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);
import PictureInput from "vue-picture-input";
Vue.component(PictureInput);
// VueSelect
import Select2 from "vue-select2-component";
Vue.component("Select2", Select2);
// Vue Cookie
import VueCookie from "vue-cookie";
Vue.use(VueCookie);
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import vueCountryRegionSelect from "vue-country-region-select";
Vue.use(vueCountryRegionSelect);

Vue.filter("currency", value =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN"
  }).format(value)
);
Vue.filter("striphtml", function(value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

import moment from "moment";

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("Do MMMM YYYY");
  }
});
Vue.filter("timeago", function(value) {
  if (value) {
    return moment(String(value)).fromNow();
  }
});
import HistogramSlider from "vue-histogram-slider";
import "vue-histogram-slider/dist/histogram-slider.css";

Vue.component(HistogramSlider.name, HistogramSlider);

import authMixin from "./mixins/auth";
Vue.use(authMixin);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
