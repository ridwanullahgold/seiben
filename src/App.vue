/* eslint-disable no-unused-vars */ /* eslint-disable no-unused-vars */
<template>
  <div
    class="site-wrapper overflow-hidden"
    v-bind:class="{ 'bg-default-2': currentUser }"
  >
    <!-- Header start  -->
    <!-- Header Area -->
    <header
      class="site-header site-header--menu-right bg-default py-7 py-lg-0 site-header--absolute site-header--sticky"
    >
      <div class="container">
        <nav
          class="navbar site-navbar offcanvas-active navbar-expand-lg  px-0 py-0"
        >
          <!-- Brand Logo-->
          <div class="brand-logo">
            <router-link to="/">
              <!-- light version logo (logo must be black)-->
              <img
                src="./assets/image/logo-main-black.png"
                alt=""
                class="light-version-logo default-logo"
              />
              <!-- Dark version logo (logo must be White)-->
              <img
                src="./assets/image/logo-main-white.png"
                alt=""
                class="dark-version-logo"
              />
            </router-link>
          </div>
          <div class="collapse navbar-collapse" id="mobile-menu">
            <div class="navbar-nav-wrapper">
              <ul class="navbar-nav main-menu">
                <li class="nav-item dropdown active">
                  <router-link
                    class="nav-link gr-toggle-arrow"
                    id="navbarDropdown"
                    to="/"
                    aria-expanded="false"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item dropdown">
                  <router-link class="nav-link gr-toggle-arrow" to="/search"
                    >Find Jobs</router-link
                  >
                </li>
                <li class="nav-item" v-if="currentUser">
                  <router-link class="nav-link" to="/employer/" v-if="employer"
                    >Dashboard</router-link
                  >
                  <router-link
                    class="nav-link"
                    to="/candidate/"
                    v-if="candidate"
                    >Dashboard</router-link
                  >
                  <router-link class="nav-link" to="/admin/" v-if="admin"
                    >Dashboard</router-link
                  >
                </li>
              </ul>
            </div>
            <button
              class="d-block d-lg-none offcanvas-btn-close focus-reset"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <i class="gr-cross-icon"></i>
            </button>
          </div>
          <div
            v-if="!currentUser"
            class="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex"
          >
            <router-link
              class="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
              to="/login"
            >
              Log in
            </router-link>

            <router-link
              class="btn secoundary text-white text-uppercase font-size-3"
              to="/signup"
            >
              Sign up
            </router-link>
          </div>
          <div
            v-if="currentUser"
            class="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex"
          >
            <a
              class="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
            >
              {{ currentUser.first_name }} {{ currentUser.last_name }}
            </a>
            <a
              class="btn secoundary text-white text-uppercase font-size-3"
              style="cursor:pointer"
              @click.prevent="logOut"
            >
              Logout
            </a>
          </div>

          <div
            v-if="currentUser"
            class="header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center"
          >
            <div>
              <a
                href="#"
                class="px-3 ml-7 font-size-7 notification-block flex-y-center position-relative"
              >
                <i class="fas fa-bell heading-default-color"></i>
                <span
                  class="font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white"
                  >3</span
                >
              </a>
            </div>
            <div>
              <div class="dropdown show-gr-dropdown py-5">
                <a
                  class="proile media ml-7 flex-y-center"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <!-- {{currentUser}} -->
                  <div class="circle-40">
                    <img
                      :src="getImgUrl(currentUser.photo)"
                      width="70px"
                      height="70px"
                      alt=""
                      v-if="currentUser.photo"
                    />
                    <img
                      :src="getImgUrl('noimage.png')"
                      class="img-rounded"
                      width="30px"
                      height="30px"
                      alt=""
                      v-else
                    />
                  </div>
                  <i class="fas fa-chevron-down heading-default-color ml-6"></i>
                </a>
                <div
                  class="dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a
                    class="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase"
                    href="dashboard-settings.html"
                    >Settings
                  </a>
                  <a
                    class="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase"
                    href="candidate-profile-main.html"
                    >Edit Profile</a
                  >
                  <a
                    class="dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase cursor-pointer"
                    style="cursor:pointer!important"
                    @click.prevent="logOut"
                    >Log Out</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Hamburger-->
          <button
            class="navbar-toggler btn-close-off-canvas  hamburger-icon border-0"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <!-- <i class="icon icon-simple-remove icon-close"></i> -->
            <span class="hamburger hamburger--squeeze js-hamburger">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </span>
          </button>
          <!--/.Mobile Menu Hamburger Ends-->
        </nav>
      </div>
    </header>
    <!-- navbar- -->

    <router-view></router-view>

    <!-- footer area function start -->
    <!-- cta section -->

    <!-- footer area function end -->
  </div>
</template>

<script>
// require("jquery");
global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;
require("./assets/js/vendor.min.js");
require("./assets/plugins/nice-select/jquery.nice-select.min.js");
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}
export default {
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "SiebenPlus";
      }
    }
  },

  computed: {
    currentUser() {
      return (
        this.$store.state.auth.status.loggedIn && this.$store.state.auth.user
      );
    },
    candidate() {
      return this.$store.state.auth.user.role == "Candidate";
    },
    employer() {
      return this.$store.state.auth.user.role == "Employer";
    },
    admin() {
      return this.$store.state.auth.user.role == "Admin";
    }

    // return this.$store.state.auth.user;
  },
  methods: {
    getImgUrl(pic) {
      return `${baseUrl}/${pic}`;
    },
    logOut() {
      this.$store.dispatch("LogOutAction");
      this.$router.push("/login");
    }
  }
};

// Hello from here on

$(document).ready(function() {
  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
        Bootstrap Mobile Megamenu Support
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

  // eslint-disable-next-line no-unused-vars
  $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
    if (
      !$(this)
        .next()
        .hasClass("show")
    ) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");

    $(this)
      .parents("li.nav-item.dropdown.show")
      // eslint-disable-next-line no-unused-vars
      .on("hidden.bs.dropdown", function(e) {
        $(".dropdown-submenu .show").removeClass("show");
      });

    return false;
  });

  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      $(".site-header--sticky").addClass("scrolling");
    } else {
      $(".site-header--sticky").removeClass("scrolling");
    }
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      $(".site-header--sticky.scrolling").addClass("reveal-header");
    } else {
      $(".site-header--sticky.scrolling").removeClass("reveal-header");
    }
  }

  $(window).load(function() {
    setTimeout(function() {
      $("#loading").fadeOut(500);
    }, 1000);
    setTimeout(function() {
      $("#loading").remove();
    }, 2000);
  });

  // End show

  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Prcing Dynamic Script
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  $("[data-pricing-trigger]").on("click", function(e) {
    $(e.target)
      .addClass("active")
      .siblings()
      .removeClass("active");
    var target = $(e.target).attr("data-target");
    console.log($(target).attr("data-value-active") == "monthly");
    if ($(target).attr("data-value-active") == "monthly") {
      $(target).attr("data-value-active", "yearly");
    } else {
      $(target).attr("data-value-active", "monthly");
    }
  });

  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

  $(".goto").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        2000,
        function() {
          window.location.hash = hash;
        }
      );
    } // End if
  });
  $("nice-select").niceSelect();
});

function toggleItem() {
  let getItem = document.querySelectorAll(".toggle-item");
  for (let i = 0; i < getItem.length; i++) {
    getItem[i].addEventListener("click", function(e) {
      if (e.target.classList.contains("clicked")) {
        alert(e.target.classList);
        e.target.classList.remove("clicked");
      } else {
        e.target.classList.add("clicked");
      }
    });
  }
}
toggleItem();

// Enh hello from here
</script>

<style src="@/assets/css/bootstrap.css"></style>
<style src="@/assets/css/main.css"></style>
<style src="@/assets/plugins/nice-select/nice-select.min.css"></style>

<style lang="scss">
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab
</style>
