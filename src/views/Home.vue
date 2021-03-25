<template>
  <div>
    <!-- Hero Area -->
    <div class="position-relative z-index-1 overflow-hidden">
      <!-- .Hero pattern -->
      <div class="bg-gradient-1 pt-26 pt-md-32 pt-lg-33">
        <div class="pos-abs-tr w-50 z-index-n2">
          <img
            src="../assets/image/patterns/hero-pattern.png"
            alt=""
            class="gr-opacity-10"
          />
        </div>
        <!-- ./Hero pattern -->
        <div class="container">
          <div class="row position-relative align-items-center">
            <div
              class="col-xxl-6 col-xl-7 col-lg-8 col-md-12 pt-lg-13 pb-lg-33 pb-xl-34 pb-md-33 pb-10"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <h1 class="font-size-11 mb-12 pr-md-30 pr-lg-0">
                Find the perfect job that you deserve.
              </h1>
              <div class="">
                <!-- .search-form -->
                <form @submit.prevent="onSubmit" class="search-form shadow-6">
                  <div
                    class="filter-search-form-1 bg-white rounded-sm shadow-4"
                  >
                    <div class="filter-inputs">
                      <div class="form-group position-relative">
                        <input
                          class="form-control focus-reset pl-13"
                          type="search"
                          id="keyword"
                          v-model="search"
                          placeholder="Job title"
                        />
                        <span
                          class="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"
                          ><i
                            class="icon icon-zoom-2 text-primary font-weight-bold"
                          ></i
                        ></span>
                      </div>
                      <!-- .select-city starts -->
                      <div class="form-group position-relative">
                        <select
                          name="country"
                          id="country"
                          class="nice-select pl-13 h-100 arrow-3 font-size-4"
                          v-model="city"
                        >
                          <option
                            value=""
                            data-display="Location"
                            class="text-uppercase"
                            >Location</option
                          >
                          <option value="us">United States of America</option>
                          <option>United Arab Emirates</option>
                          <option>Bangladesh</option>
                          <option>Pakistan</option>
                        </select>
                        <span
                          class="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"
                          ><i
                            class="icon icon-pin-3 text-primary font-weight-bold"
                          ></i
                        ></span>
                      </div>
                      <!-- ./select-city ends -->
                    </div>
                    <!-- .Hero Button -->
                    <div class="button-block d-xs-none d-sm-block">
                      <router-link
                        :to="{
                          path: `/search/`,
                          query: { q: search, t: city }
                        }"
                        class="button-block d-xs-none d-sm-block"
                      >
                        <button
                          class="btn secoundary text-white line-height-reset h-100 btn-submit w-100 text-uppercase"
                        >
                          Search
                        </button>
                      </router-link>
                    </div>
                    <!-- ./Hero Button -->
                  </div>

                  <!-- .Hero Button -->
                  <div class="button-block d-sm-none mt-3">
                    <router-link
                      :to="{
                        path: `/search/`,
                        query: { q: search, t: city }
                      }"
                      class="btn-block d-sm-none mt-3"
                    >
                      <button
                        class="btn secoundary text-white p-xs-6 line-height-reset h-100 btn-submit w-100 text-uppercase"
                      >
                        Search
                      </button>
                    </router-link>
                  </div>
                  <!-- ./Hero Button -->
                </form>
                <!-- ./search-form -->
                <p class="heading-default-color font-size-3 pt-7">
                  <span class="text-smoke">Search keywords e.g.</span> Product
                  Designer
                </p>
              </div>
            </div>
            <!-- Hero Right Image -->
            <div
              class="col-lg-6 col-md-4 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <!-- content-2 start -->
              <div class="pl-lg-10 pl-0">
                <!-- content img start -->
                <div class="d-xs-flex  mx-sm-n3">
                  <div class="d-flex flex-column px-3 px-sm-6 w-lg-auto w-100">
                    <!-- single image start -->
                    <img
                      src="../assets/image/l3/png/content-2-img1.png"
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-once="true"
                      class="w-100 pb-6 pb-sm-9 rounded-4 aos-init aos-animate"
                    />
                    <!-- single image end -->
                    <!-- single image -->
                    <img
                      src="../assets/image/l3/png/content-2-img2.png"
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="700"
                      data-aos-once="true"
                      class="w-100 pb-6 pb-sm-9 rounded-4 aos-init aos-animate"
                    />
                    <!-- single image end -->
                  </div>
                  <div
                    class="d-flex flex-column pt-xs-11 px-3 px-sm-6 w-lg-auto w-100"
                  >
                    <!-- single image -->
                    <img
                      src="../assets/image/l3/png/content-2-img3.png"
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="400"
                      data-aos-once="true"
                      class="w-100 pb-6 pb-sm-9 rounded-4 aos-init aos-animate"
                    />
                    <!-- single image end -->
                    <!-- single image -->
                    <div class="bg-green py-16 px-19 rounded-4"></div>
                    <!-- single image end -->
                  </div>
                </div>
                <!-- abs-content end -->
              </div>
              <!-- content-2 end -->
            </div>
            <!-- <div class="col-lg-6 col-md-4 col-sm-6 col-xs-6 col-8 pos-abs-br z-index-n1 position-static position-md-absolute mx-auto ml-md-auto" data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
            <div class=" ml-xxl-23 ml-xl-12 ml-md-7">
              <img src="image/l1/png/hero-image-man.png" alt="" class="w-100">
            </div>
          </div> -->
            <!-- ./Hero Right Image -->
          </div>
        </div>
      </div>
    </div>
    <!-- Hero Area -->
    <!-- Brand1Section Area -->

    <!-- Brand1Section Area -->

    <!-- Section Services Area -->
    <div class="pt-11 pb-7 pb-lg-18">
      <div class="container">
        <!-- Section title -->
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6 col-xxl-5">
            <div class="text-center mb-8 mb-lg-18 px-xl-9 px-xxl-7">
              <h2 class="font-size-9 mb-6">How it works</h2>
              <p class="font-size-4 text-default-color px-xs-9 px-md-0">
                Creating a beautiful job website is not easy always. To make
                your life easier, we are introducing Jobcamp template.
              </p>
            </div>
          </div>
        </div>
        <!-- End Section title -->
        <!-- Services Content -->
        <div
          class="row justify-content-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <!-- Single Services -->
          <div class="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
            <div class="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
              <div
                class="square-92 rounded-4 bg-dodger text-white font-size-8 mx-auto shadow-dodger mb-11"
              >
                <img src="../assets/image/svg/shoot.svg" alt="" />
              </div>
              <div class="services-content">
                <h3 class="font-size-6 mb-7">Register Your Account</h3>
                <p class="font-size-4 text-default-color">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital.
                </p>
              </div>
            </div>
          </div>
          <!-- End Single Services -->
          <!-- Single Services -->
          <div class="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
            <div class="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
              <div
                class="square-92 rounded-4 bg-green text-white font-size-8 mx-auto shadow-green mb-11"
              >
                <img src="../assets/image/svg/user.svg" alt="" />
              </div>
              <div class="services-content">
                <h3 class="font-size-6 mb-7">Apply for New Jobs</h3>
                <p class="font-size-4 text-default-color">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches.
                </p>
              </div>
            </div>
          </div>
          <!-- End Single Services -->
          <!-- Single Services -->
          <div class="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
            <div class="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
              <div
                class="square-92 rounded-4 bg-casablanca text-white font-size-8 mx-auto shadow-casablanca mb-11"
              >
                <img src="../assets/image/svg/heart.svg" alt="" />
              </div>
              <div class="services-content">
                <h3 class="font-size-6 mb-7">Get Hired Immediately</h3>
                <p class="font-size-4 text-default-color">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital.
                </p>
              </div>
            </div>
          </div>
          <!-- End Single Services -->
        </div>
        <!-- End Services Content -->
      </div>
    </div>
    <!-- 3stepsSection1 Area End -->

    <!-- ContentOne Area -->
    <div class="bg-default-2 pt-12 pt-lg-25 pb-12 pb-lg-25">
      <div class="container">
        <!-- Section title -->
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6 col-xxl-5">
            <div class="text-center mb-8 mb-lg-18 px-xl-9 px-xxl-7">
              <h2 class="font-size-9 mb-6">Featured Jobs</h2>
              <p class="font-size-4 text-default-color px-xs-9 px-md-0">
                Creating a beautiful job website is not easy always. To make
                your life easier, we are introducing Sieben Job portal to you.
              </p>
            </div>
          </div>
        </div>
        <!-- End Section title -->
        <div
          class="row justify-content-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9"
            v-for="(job, index) in allJobs"
            :key="index"
          >
            <!-- Single Featured Job -->
            <div
              class="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3"
            >
              <div class="media align-items-center">
                <div class="square-52 bg-orange-2 mr-10 rounded">
                  <router-link
                    :to="{ path: '/company-profile/' + job.user[0].slug }"
                  >
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
                  </router-link>
                </div>
                <div>
                  <a
                    href="#"
                    class="font-size-3 text-default-color line-height-2"
                  >
                    {{ job.user[0].company_name }}
                  </a>
                  <h3 class="font-size-6 mb-0">
                    <router-link
                      class="font-size-7 text-black-2 font-weight-bold mb-4"
                      :to="{ path: '/jobdetails/' + job.slug }"
                      >{{ job.title }}
                    </router-link>
                  </h3>
                </div>
              </div>
              <div class="d-flex pt-17">
                <ul class="list-unstyled mb-1 d-flex flex-wrap">
                  <li>
                    <a
                      class="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                    >
                      <i class="icon icon-pin-3 mr-2 font-weight-bold"></i>
                      {{ job.city }}
                    </a>
                  </li>
                  <li>
                    <a
                      class="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                    >
                      <i class="fa fa-briefcase mr-2 font-weight-bold"></i>
                      {{ job.type ? job.type : "Full-Time" }}
                    </a>
                  </li>
                </ul>
                <a
                  href="javascript:"
                  class="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "
                >
                </a>
              </div>
            </div>
            <!-- End Single Featured Job -->
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center pt-md-11 ">
            <router-link
              class="btn primary btn-xl text-white font-weight-bold text-uppercase font-size-3 p-8"
              to="/search"
              >See {{ rows }} more jobs
              <i class="fas fa-long-arrow-alt-right fa-3x ml-3"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- ContentOne Area End -->

    <!-- ContentOne Area -->
    <!-- content-1 section -->
    <section class="pt-7 pt-lg-16 pb-2 pb-lg-32">
      <div class="container">
        <div class="row pb-lg-6 justify-content-center">
          <div
            class="col-xl-6 col-lg-5 col-md-10 col-sm-11"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <!-- content-1 left-content start -->
            <div class="position-relative pr-xl-20 pr-md-15 pr-15">
              <!-- content img start -->
              <img
                src="../assets/image/l1/jpg/content-1-img1.jpg"
                alt=""
                class="w-100 rounded overflow-hidden"
              />
              <!-- content img end -->
              <!-- abs-content start -->
              <div
                class="pos-abs-br pt-17 pb-9 pl-8 pr-12  bg-white shadow-2 rounded scale-p7 scale-xs-1 mb-n20 mr-n10 mr-xs-5 mr-sm-0 mb-xs-n10"
              >
                <!-- check-mark start -->
                <span
                  class="pos-abs-tl circle-79 bg-green font-size-9 mt-n9 ml-n9 "
                >
                  <i class="fas fa-check text-white"></i>
                </span>
                <!-- check-mark end -->
                <p class="text-black-2 text-4 font-weight-bold mb-7">
                  <span class="font-weight-normal">Found</span> 290+ Jobs
                </p>
                <div class="d-flex">
                  <ul
                    class="list-unstyled list-overlapped-icon max-width-130px"
                  >
                    <li class="ml-0">
                      <a href="#" class="circle-34">
                        <img
                          src="image/l1/png/smal-logo1.png"
                          alt=""
                          class="img"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="image/l1/png/smal-logo2.png"
                          alt=""
                          class="img img2"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="image/l1/png/smal-logo3.png"
                          alt=""
                          class="img img3"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="image/l1/png/smal-logo4.png"
                          alt=""
                          class="img img4"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="image/l1/png/smal-logo5.png"
                          alt=""
                          class="img img5"
                        />
                      </a>
                    </li>
                  </ul>
                  <p class="text-space-black font-size-4 mt-1">+14 Giants</p>
                </div>
              </div>
              <!-- abs-content end -->
            </div>
            <!-- content-1 left-content end -->
          </div>
          <div
            class="col-xl-6 col-lg-7 col-md-8"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <!-- content-1 start -->
            <div
              class="pl-lg-10 pl-0 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-15 pr-md-13 pr-xl-15 pr-xxl-25 pr-0 "
            >
              <!-- content-1 section-title start -->
              <h2 class="font-size-9 mb-8 pr-xxl-15">
                Help you to get the best job that fits you
              </h2>
              <p class="text-gray font-size-5 mb-10 mb-lg-16">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approach
              </p>
              <!-- content-1 section-title end -->
              <!-- content-1 list-group start -->
              <ul class="list-unstyled pl-0">
                <li
                  class="font-weight-semibold border-0 d-flex mb-7 heading-default-color"
                >
                  <i class="fas fa-check font-size-4 text-green mr-6"></i>Bring
                  to the table win-win survival
                </li>
                <li
                  class="font-weight-semibold border-0 d-flex mb-7 heading-default-color"
                >
                  <i class="fas fa-check font-size-4 text-green mr-6"></i
                  >Capitalize on low hanging fruit to identify
                </li>
                <li
                  class="font-weight-semibold border-0 d-flex mb-7 heading-default-color"
                >
                  <i class="fas fa-check font-size-4 text-green mr-6"></i>But I
                  must explain to you how all this
                </li>
              </ul>
              <!-- content-1 list-group end -->
            </div>
            <!-- content-1 end -->
          </div>
        </div>
      </div>
    </section>
    <!-- ContentOne Area -->

    <section class=" bg-success">
      <div class="container">
        <!-- Cta section -->
        <div class="pt-11 pt-lg-20 pb-13 pb-lg-20">
          <div class="row justify-content-center ">
            <div
              class="col-xl-7 col-lg-12"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <!-- cta-content start -->
              <div class="pb-xl-0 pb-9 text-xl-left text-center">
                <h2 class="text-white font-size-8 mb-4">Take the next step</h2>
                <p class="text-white font-size-5 mb-0">
                  Finding the right tech talent can be difficult and time
                  consuming, let's make it easier and efficient for you
                </p>
              </div>
              <!-- cta-content end -->
            </div>
            <div
              class="col-xl-5 col-lg-12"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <!-- cta-btns start -->
              <div
                class="btns d-flex justify-content-xl-end justify-content-center align-items-xl-center flex-wrap h-100  mx-n4"
              >
                <router-link
                  class="btn btn-white text-success btn-xl mx-4 mt-6 pl-0 text-uppercase"
                  to="/employer"
                >
                  <div class="row">
                    <div class="col-md-9 col-xs-10">
                      <div class="mt-2">
                        Start Hiring Talents
                      </div>
                    </div>
                    <div class="col-md-3 col-xs-2">
                      <i class="fas fa-long-arrow-alt-right fa-3x mr-1"></i>
                    </div>
                  </div>
                </router-link>

                <router-link
                  class="btn secoundary text-dark btn-xl mx-4 mt-6 text-uppercase"
                  to="/search"
                >
                  <div class="row">
                    <div class="col-md-8 col-xs-8">
                      <div class="mt-2">
                        Apply to Jobs
                      </div>
                    </div>
                    <div class="col-md-4 col-xs-4">
                      <i class="fas fa-long-arrow-alt-right fa-3x mr-1"></i>
                    </div>
                  </div>
                </router-link>
              </div>
              <!-- cta-btns end -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <footers />
  </div>
</template>
<script>
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}
import { mapActions } from "vuex";
import Footers from "./layouts/footer";
export default {
  components: {
    Footers
  },
  data() {
    return {
      rows: "",
      search: "",
      city: "",
      allJobs: []
    };
  },
  methods: {
    ...mapActions(["getAllJobs", "getFeaturedJobs"]),
    async onSubmit() {},
    getImgUrl(pic) {
      return `${baseUrl}/${pic}`;
    }
  },
  async created() {
    this.getAllJobs().then(result => {
      this.rows = result.data.length;
    });
    this.getFeaturedJobs().then(result => {
      this.allJobs = result.data;
    });
  }
};
</script>
