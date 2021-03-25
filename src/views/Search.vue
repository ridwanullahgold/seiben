<template>
  <div>
    <!-- Main Content Start -->
    <div class="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4 col-md-5 col-xs-8">
            <!-- Sidebar Start -->
            <div class="widgets mb-11">
              <h4 class="font-size-6 font-weight-semibold mb-6">Categories</h4>
              <ul
                class="list-unstyled filter-check-list"
                v-for="c in allcats"
                :value="c.name"
                :key="c._id"
              >
                <li class="mb-2">
                  <span>
                    <a
                      href="#"
                      @click.prevent="clicked"
                      id="ji"
                      class="toggle-item"
                      >{{ c.name }} {{ c.count }}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div class="widgets mb-11">
              <h4 class="font-size-6 font-weight-semibold mb-6">
                Company Size
              </h4>
              
              <ul
                class="list-unstyled filter-check-list"
                v-for="c in employees"
                :value="c"
                :key="c"
              >
                <li class="mb-2">
                  <a
                    href="#"
                    @click.prevent="sizeClicked"
                    class="toggle-item"
                    >{{ c }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="widgets mb-11">
              <h4 class="font-size-6 font-weight-semibold mb-6">Job Level</h4>
              <ul
                class="list-unstyled filter-check-list"
                v-for="c in allevels"
                :value="c.name"
                :key="c.name"
              >
                <li class="mb-2">
                  <a href="#" @click.prevent="levelClicked" class="toggle-item"
                    >{{ c.name }} {{ c.count }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="widgets mb-11 ">
              <div
                class="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22"
              >
                <!-- Range Slider -->
              </div>
            </div>
            <!-- Sidebar End -->
          </div>
          <!-- Main Body -->
          <div class="col-12 col-xl-8 col-lg-8">
            <!-- form -->
            <form @submit.prevent="onSubmit" class="search-form">
              <div
                class="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6"
              >
                <div class="filter-inputs">
                  <div
                    class="form-group position-relative w-lg-45 w-xl-40 w-xxl-45"
                  >
                    <input
                      class="form-control focus-reset pl-13"
                      type="search"
                      id="keyword"
                      placeholder="Search using Job Title.."
                      v-model="search"
                    />
                    <span
                      class="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"
                    >
                      <i
                        class="icon icon-zoom-2 text-primary font-weight-bold"
                      ></i>
                    </span>
                  </div>
                  <!-- .select-city starts -->
                  <div
                    class="form-group position-relative w-lg-55 w-xl-60 w-xxl-55"
                  >
                    <select
                      name="country"
                      id="country"
                      class="nice-select font-size-4 pl-13 h-100 arrow-3"
                      v-model="city"
                    >
                      <option data-display="City, state, zip code or (Remote)"
                        >City</option
                      >
                      <option>United States of America</option>
                      <option>United Arab Emirates</option>
                      <option>Bangladesh</option>
                      <option>Pakistan</option>
                    </select>
                    <span
                      class="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"
                    >
                      <i
                        class="icon icon-pin-3 text-primary font-weight-bold"
                      ></i>
                    </span>
                  </div>
                  <!-- ./select-city ends -->
                </div>
                <div class="button-block">
                  <button
                    type="submit"
                    class="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
            <div class="pt-12 ml-lg-0 ml-md-15">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="font-size-4 font-weight-normal text-default-color">
                  <span class="heading-default-color">{{
                    filteredJobs.length
                  }}</span>
                  results for
                  <span class="heading-default-color">{{
                    search ? search : "All Jobs"
                  }}</span>
                </h5>
                <h5 class="font-size-4 font-weight-normal text-default-color">
                  <span v-if="cats.length">
                    Categories :
                    <span class="heading-default-color">
                      {{ cats.join(", ") }}
                    </span> </span
                  >. &nbsp;&nbsp;
                  <span v-if="size.length">
                    Company Size :
                    <span class="heading-default-color">
                      {{ size.join(", ") }}
                    </span> </span
                  >.&nbsp;&nbsp;
                  <span v-if="size.length">
                    Level :
                    <span class="heading-default-color"
                      >{{ levelz.join(", ") }}
                    </span>
                  </span>
                </h5>
              </div>

              <div class="pt-6" v-if="allJobs.length">
                <div class="row justify-content-center">
                  <div
                    class="col-12 col-lg-6"
                    v-for="(job, index) in filteredJobItem"
                    :key="index"
                    :per-page="perPage"
                    :current-page="currentPage"
                  >
                    <!-- Start Feature One -->
                    <div
                      class="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments"
                    >
                      <div class="d-block" style="margin-top:0px;padding:0px">
                        <img
                          :src="getImgUrl(job.user[0].photo)"
                          alt=""
                          v-if="job.user[0].photo"
                          width="100px"
                          height="100px"
                        />
                        <img
                          :src="getImgUrl('noimage.png')"
                          alt=""
                          width="100px"
                          height="100px"
                          v-else
                        />
                      </div>
                      <a class="font-size-3 d-block mb-0 text-gray">
                        {{ job.user[0].company_name }}
                      </a>
                      <h2 class="mt-n4">
                        <router-link
                          class="font-size-7 text-black-2 font-weight-bold mb-4"
                          :to="{ path: '/jobdetails/' + job.slug }"
                          >{{ job.title }}
                        </router-link>
                      </h2>
                      <ul class="list-unstyled mb-1 card-tag-list">
                        <li>
                          <a
                            class="bg-regent-opacity-15 text-denim font-size-3 rounded-3"
                          >
                            <i
                              class="icon icon-pin-3 mr-2 font-weight-bold"
                            ></i>
                            {{ job.category.name }}
                          </a>
                        </li>
                        <li>
                          <a
                            class="bg-regent-opacity-15 text-orange font-size-3 rounded-3"
                          >
                            <i
                              class="fa fa-briefcase mr-2 font-weight-bold"
                            ></i>
                            {{ job.type ? job.type : "Full-Time" }}
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-regent-opacity-15 text-eastern font-size-3 rounded-3"
                          >
                            <i
                              class="fa fa-naira-sign mr-2 font-weight-bold"
                            ></i>
                            N {{ job.salary ? job.salary : "" }}
                          </a>
                        </li>
                      </ul>
                      <p class="mb-7 font-size-4 text-gray">
                        <span v-html="job.description"></span>
                        {{ job.user[0].employeeSize }}
                      </p>
                      <ul
                        class="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end"
                      >
                        <li
                          class="mt-2 mr-8 font-size-small text-black-2 d-flex"
                        >
                          <span class="mr-4" style="margin-top: -2px"
                            ><img src="image/svg/icon-clock.svg" alt=""
                          /></span>
                          <span class="font-weight-semibold">{{
                            job.createdAt | timeago
                          }}</span>
                        </li>
                      </ul>
                      <div class="card-btn-group">
                        <a
                          class="btn btn-green text-uppercase btn-medium rounded-3"
                          @click.prevent="applyJob(job._id)"
                          >Apply Now</a
                        >
                        <a
                          class="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3"
                          @click.prevent="shortlistJob(job._id)"
                          ><i
                            class="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"
                          ></i>
                          Save it</a
                        >
                      </div>
                    </div>
                    <!-- End Feature One -->
                  </div>
                </div>
                <div class="text-center pt-5 pt-lg-13">
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="filteredJobs"
                    align="center"
                  ></b-pagination>
                </div>
              </div>
              <div class="row justify-content-center" v-else>
                <div class="col-12 col-lg-6">
                  <!-- Start Feature One -->
                  <div
                    class="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments"
                  >
                    <p class="mb-7 font-size-4 text-gray">
                      No matching jobs found...😑
                    </p>
                  </div>
                  <!-- End Feature One -->
                </div>
              </div>
            </div>
            <!-- form end -->
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content end -->
    <footers />
  </div>
</template>

<script>
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}
import Footers from "./layouts/footer";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Search",
  components: {
    Footers
  },
  computed: {
    ...mapGetters(["allCategories"]),
    queryMode() {
      return this.$route.query.q;
    },
    filteredJobs: function() {
      var result;
      result = this.allJobs.filter(job => {
        return job.title.toLowerCase().match(this.search.toLowerCase());
      });
      if (this.cats.length) {
        result = this.allJobs.filter(job => {
          return this.cats.includes(job.category.name);
        });
      }
      if (this.size.length) {
        result = this.allJobs.filter(job => {
          return this.size.includes(job.user[0].employeeSize);
        });
      }
      if (this.levelz.length) {
        result = this.allJobs.filter(job => {
          return this.levelz.includes(job.level);
        });
      }
      return result;
    },
    filteredJobItem: function() {
      var result;
      result = this.allJobs.filter(job => {
        return job.title.toLowerCase().match(this.search.toLowerCase());
      });
      if (this.cats.length) {
        result = this.allJobs.filter(job => {
          return this.cats.includes(job.category.name);
        });
      }
      if (this.size.length) {
        result = this.allJobs.filter(job => {
          return this.size.includes(job.user[0].employeeSize);
        });
      }
      if (this.levelz.length) {
        result = this.allJobs.filter(job => {
          return this.levelz.includes(job.level);
        });
      }
      return result.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    }
  },
  async created() {
    if (this.queryMode) {
      this.search = this.queryMode;
      this.city = this.$route.query.t;
    }
    await this.fetchCategories();
    this.fetchCats().then(result => {
      this.allcats = result.data;
    });
    this.fetchLevels().then(result => {
      this.allevels = result.data;
    });
    this.getAllJobs().then(result => {
      this.allJobs = result.data;
      this.rows = this.allJobs.length;
    });
  },
  methods: {
    ...mapActions([
      "fetchCategories",
      "fetchCats",
      "fetchLevels",
      "getAllJobs",
      "applyJobAction",
      "shortlistJobAction"
    ]),
    getImgUrl(pic) {
      return `${baseUrl}/${pic}`;
    },
    onSubmit() {
      this.filteredJobs;
    },
    applyJob(param) {
      this.applyJobAction({ id: param })
        .then(() => {
          this.$toastr.s(
            "Job Applied Successfully. View more details on your dashboard",
            "Success!"
          );
        })
        .catch(error => {
          console.log(error.response);
          this.$toastr.e(error.response.data.message, "Error!");
        });
    },
    shortlistJob(param) {
      this.shortlistJobAction({ id: param })
        .then(() => {
          this.$toastr.s(
            "Job Shortlisted Successfully. View more details on your dashboard",
            "Success!"
          );
        })
        .catch(error => {
          console.log(error.response);
          this.$toastr.e(error.response.data.message, "Error!");
        });
    },
    clicked(e) {
      if (e.target.classList.contains("clicked")) {
        e.target.classList.remove("clicked");
        this.cats.splice(e.target.innerText, 1);
      } else {
        e.target.classList.add("clicked");
        this.cats.push(
          e.target.innerText
            .split(" ")
            .reverse()
            .slice(1)
            .reverse()
            .join(" ")
        );
      }
    },
    sizeClicked(e) {
      if (e.target.classList.contains("clicked")) {
        e.target.classList.remove("clicked");
        this.size.splice(e.target.innerText, 1);
      } else {
        e.target.classList.add("clicked");
        this.size.push(e.target.innerText);
      }
    },
    levelClicked(e) {
      if (e.target.classList.contains("clicked")) {
        e.target.classList.remove("clicked");
        this.levelz.splice(e.target.innerText, 1);
      } else {
        e.target.classList.add("clicked");
        this.levelz.push(
          e.target.innerText
            .split(" ")
            .reverse()
            .slice(1)
            .reverse()
            .join(" ")
        );
        // this.levelz.push(e.target.innerText);
      }
    }
  },
  data() {
    return {
      currentPage: 1,
      rows: 1,
      perPage: 10,
      employees: ["0-50", "51-100", "101-200", "201-500", "500 Above"],
      levels: ["Beginner", "Intermediate", "Advanced"],
      search: "",
      city: "",
      allJobs: [],
      allcats: [],
      allevels: [],
      cats: [],
      size: [],
      levelz: [],
      jobs: {
        id: ""
      }
    };
  }
};
</script>
