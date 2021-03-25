<template>
  <div>
    <div class="dashboard-sidebar-wrapper pt-11" id="sidebar">
      <div class="brand-logo px-11">
        <router-link to="/">
          <img src="/assets/image/logo-main-black.png" alt="" />
        </router-link>
      </div>
      <div class="my-15 px-11">
        <router-link
          to="/employer/jobs/add"
          class="btn btn-primary btn-xl w-100 text-uppercase"
          ><span class="mr-5 d-inline-block">+</span>Post new job</router-link
        >
      </div>
      <ul class="list-unstyled dashboard-layout-sidebar">
        <li class="active">
          <router-link
            to="/employer/dashboard"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Dashboard</router-link
          >
        </li>

        <li class="">
          <router-link
            to="/employer/profile"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Company
            Profile</router-link
          >
        </li>
        <li class="">
          <router-link
            to="/employer/jobs"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="fas fa-briefcase mr-7"></i>Posted Jobs</router-link
          >
        </li>
        <li class="">
          <router-link
            to="/employer/resumes"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Resumes</router-link
          >
        </li>

        <li class="">
          <router-link
            to="/employer/alerts"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Alerts</router-link
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
              <router-link to="/employer/support-tickets">
                View Tickets
              </router-link>
            </li>
            <li class="drop-menu-item">
              <router-link to="/employer/notifications">
                Notification
              </router-link>
            </li>
            <li class="drop-menu-item">
              <router-link to="/employer/support-tickets/add">
                Support Ticket
              </router-link>
            </li>
          </ul>
        </li>

        <li class="">
          <router-link
            to="/employer/applicants"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="fas fa-user mr-7"></i>Applicants
            <span
              class="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center"
              >14</span
            ></router-link
          >
        </li>

        <li class="">
          <router-link
            to="/employer/change-my-password"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="icon icon-layout-11 mr-7"></i>Change
            Password</router-link
          >
        </li>

        <li class="">
          <router-link
            to="/employer/settings"
            class="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
            ><i class="fas fa-cog mr-7"></i>Settings</router-link
          >
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
      <i class="gr-cross-icon"></i>
    </a>
  </div>
</template>
