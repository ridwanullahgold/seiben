<template>
  <div>
    <div class="dashboard-sidebar-wrapper pt-11" id="sidebar">
      <div class="brand-logo px-11">
        <a href="https://shade.uxtheme.net/shade-pro">
          <img src="image/logo-main-black.png" alt="" />
        </a>
      </div>
      <div class="my-15 px-11">
        <router-link
          to="/candidate/profile"
          class="btn btn-primary btn-xl w-100 text-uppercase"
          ><span class="mr-5 d-inline-block">+</span>My Profile</router-link
        >
      </div>
      <ul class="list-unstyled dashboard-layout-sidebar">
        <li class="">
          <a
            href="#"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Shortlisted Jobs</a
          >
        </li>

        <li class="">
          <a
            href="#"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Favourite Jobs</a
          >
        </li>

        <li class="">
          <a
            href="#"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Applied Jobs</a
          >
        </li>

        <li class="">
          <a
            href="#"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Cv & Cover Letter</a
          >
        </li>

        <li class="">
          <a
            href="#"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Jobs Alert</a
          >
        </li>

        <li class="nav-item dropdown">
          <a
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center gr-toggle-arrow"
            id="navbarDropdown"
            href="#"
            ><i class="icon icon-layout-11 mr-7"></i>Support Ticket
          </a>
          <ul
            class="gr-menu-dropdown dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <li class="drop-menu-item">
              <a href="#">
                Support Ticket
              </a>
            </li>
            <li class="drop-menu-item">
              <a href="#">
                Notification
              </a>
            </li>
            <li class="drop-menu-item">
              <a href="#">
                View Tickets
              </a>
            </li>
          </ul>
        </li>

        <li class="">
          <router-link
            to="/candidate/change-my-password"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Change Password
          </router-link>
        </li>
      </ul>
    </div>
    <a
      class="sidebar-mobile-button"
      data-toggle="collapse"
      href="#sidebar"
      role="button"
      aria-expanded="false"
      aria-controls="sidebar"
    >
      <!-- <i class="gr-cross-icon"></i> -->
    </a>
  </div>
</template>
