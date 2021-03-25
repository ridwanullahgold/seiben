<template>
  <div>
    <!-- jobDetails-section -->
    <div class="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
      <div class="container">
        <div class="row justify-content-center">
          <!-- back Button -->
          <div
            class="col-xl-10 col-lg-11 mt-4 ml-xxl-32 ml-xl-15 dark-mode-texts"
          >
            <div class="mb-9">
              <router-link class="d-flex align-items-center ml-4" to="/search">
                <i
                  class="fa fa-arrow-circle-left bg-white pt-3 pl-3 circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"
                >
                </i
                ><span
                  class="text-uppercase font-size-3 font-weight-bold text-gray"
                  >Back to job board</span
                ></router-link
              >
            </div>
          </div>
          <!-- back Button End -->
          <div class="col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0">
            <div class="bg-white rounded-4 border border-mercury shadow-9">
              <!-- Single Featured Job -->
              <div
                class="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts"
              >
                <div class="row">
                  <div class="col-md-6">
                    <!-- media start -->
                    <div class="media align-items-center">
                      <!-- media texts start -->
                      <div>
                        <h3 class="font-size-6 mb-0">{{ jobs.title }}</h3>
                        <span class="font-size-3 text-gray line-height-2">{{
                          jobs.category.name
                        }}</span>
                      </div>
                      <!-- media texts end -->
                    </div>
                    <!-- media end -->
                  </div>
                  <div class="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">
                    <!-- media date start -->
                    <div class="media justify-content-md-end">
                      <p class="font-size-4 text-gray mb-0">
                        {{ jobs.createdAt | formatDate }}
                      </p>
                    </div>
                    <!-- media date end -->
                  </div>
                </div>
                <div class="row pt-9">
                  <div class="col-12">
                    <!-- card-btn-group start -->
                    <div class="card-btn-group">
                      <a
                        class="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5"
                        @click.prevent="applyJob(jobs._id)"
                        >Apply to this job</a
                      >

                      <a
                        class="btn btn-outline-mercury text-black-2 text-uppercase mr-5 h-px-48 rounded-3 mb-5 px-5"
                        @click.prevent="shortlistJob(jobs._id)"
                      >
                        <i
                          class="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"
                        ></i>
                        Save job</a
                      >
                      <router-link
                        class="btn btn-orange text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5"
                        :to="{ path: '/company-profile/' + jobs.user[0].slug }"
                        >View Company Profile</router-link
                      >
                    </div>
                    <!-- card-btn-group end -->
                  </div>
                </div>
              </div>
              <!-- End Single Featured Job -->
              <div
                class="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts"
              >
                <div class="row mb-7">
                  <div class="col-md-4 mb-md-0 mb-6">
                    <div class="media justify-content-md-start">
                      <div class="image mr-5">
                        <img src="image/svg/icon-dolor.svg" alt="" />
                      </div>
                      <p
                        class="font-weight-semibold font-size-5 text-black-2 mb-0"
                      >
                        {{ jobs.salary }}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
                    <div class="media justify-content-md-start">
                      <div class="image mr-5">
                        <img src="image/svg/icon-briefcase.svg" alt="" />
                      </div>
                      <p
                        class="font-weight-semibold font-size-5 text-black-2 mb-0"
                      >
                        {{ jobs.type }}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 pl-lg-0">
                    <div class="media justify-content-md-start">
                      <div class="image mr-5">
                        <img src="image/svg/icon-location.svg" alt="" />
                      </div>
                      <p class="font-size-5 text-gray mb-0">
                        {{ jobs.address | striphtml }}
                        <br class="d-md-none d-lg-block d-block" />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 mb-lg-0 mb-10">
                    <div class="">
                      <span class="font-size-4 d-block mb-4 text-gray"
                        >Career Level</span
                      >
                      <h6
                        class="font-size-5 text-black-2 font-weight-semibold mb-9"
                      >
                        {{ jobs.level }}
                      </h6>
                    </div>
                    <div class="tags">
                      <p class="font-size-4 text-gray mb-0">
                        Minimum Qualification
                      </p>
                      <h6
                        class="font-size-5 text-black-2 font-weight-semibold mb-9"
                      >
                        {{ jobs.qualification }}
                      </h6>
                    </div>
                  </div>
                  <div class="col-md-4 pr-lg-0 pl-lg-10 mb-lg-0 mb-8">
                    <div class="">
                      <span class="font-size-4 d-block mb-4 text-gray"
                        >Type of corporation</span
                      >
                      <h6
                        class="font-size-5 text-black-2 font-weight-semibold mb-9"
                      >
                        {{ jobs.industry.name }}
                      </h6>
                    </div>
                    <div class="tags">
                      <p class="font-size-4 text-gray mb-3">Technical Skill</p>
                      <ul
                        class="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0"
                      >
                        <li
                          v-for="(tag, index) in jobs.skills"
                          :key="index"
                          class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2"
                        >
                          {{ tag }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 pl-lg-0">
                    <div class="">
                      <span class="font-size-4 d-block mb-4 text-gray"
                        >Company size</span
                      >
                      <h6
                        class="font-size-5 text-black-2 font-weight-semibold mb-0"
                      >
                        {{ jobs.user[0].employeeSize }} employees
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts"
              >
                <div class="row">
                  <div class="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
                    <div class="">
                      <p
                        class="mb-4 font-size-4 font-weight-semibold text-black-2"
                      >
                        Job Description
                      </p>
                      <p class="font-size-4 text-black-2 mb-7">
                        {{ jobs.description | striphtml }}.
                      </p>
                    </div>
                    <div class="">
                      <span
                        class="font-size-4 font-weight-semibold text-black-2 mb-7"
                        >Your Role:</span
                      >
                      <p class="font-size-4 text-black-2 mb-7">
                        We’re looking for a passionate individual to design
                        beautiful and functional products for our customers at
                        Gubagoo.
                      </p>
                      <p class="font-size-4 text-black-2 mb-7">
                        We are serious about remote work. You can work for from
                        anywhere.
                      </p>

                      <p class="font-size-4 text-black-2 mb-7">
                        We are serious about remote work. You can work for from
                        anywhere.
                      </p>
                      <span
                        class="font-size-4 font-weight-semibold text-black-2 mb-7"
                        >What you will be doing:</span
                      >
                      <ul class="list-unstyled">
                        <li
                          class="d-block font-size-4 text-black-2 d-flex flex-row mt-2"
                        >
                          <span class="d-inline-block mr-7">•</span>Contribute
                          new controls or design improvements to our
                        </li>
                        <li
                          class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"
                        >
                          <span class="d-inline-block mr-7">•</span>Take
                          ownership of the successful delivery of features
                        </li>
                        <li
                          class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"
                        >
                          <span class="d-inline-block mr-7">•</span>Help set and
                          achieve quarterly goals
                        </li>
                        <li
                          class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"
                        >
                          <span class="d-inline-block mr-7">•</span>Ship a TON
                          of product improvements and features
                        </li>
                      </ul>
                      <span
                        class="font-size-4 font-weight-semibold text-black-2 mb-7"
                        >Deadline:</span
                      >
                      <p class="font-size-4 text-black-2 mb-7">
                        {{ jobs.deadline | formatDate }}
                      </p>
                      <a
                        class="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6"
                        @click.prevent="applyJob(jobs._id)"
                        >Apply to this job</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer area function start -->
    <footers />
  </div>
</template>

<script>
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}
import Footers from "./layouts/footer";
import { mapActions } from "vuex";
export default {
  name: "jobdetails",
  components: {
    Footers
  },
  data() {
    return {
      jobs: ""
    };
  },
  methods: {
    ...mapActions(["fetchJob", "applyJobAction", "shortlistJobAction"]),
    getImgUrl(pic) {
      return `${baseUrl}/${pic}`;
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
    }
  },
  async mounted() {
    await this.fetchJob({ cat: this.$route.params.id })
      .then(result => {
        this.jobs = result.data;
      })
      .catch(error => {
        this.$toastr.e(error.response.data.message, "Error!");
        this.$router.push("/employer/jobs");
      });
  }
};
</script>
