<template>
  <div>
    <!-- jobDetails-section -->
    <!-- Main Content Start -->
    <div class="bg-default-2 pt-16 pt-lg-22 pb-lg-27">
      <div class="container">
        <!-- back Button -->
        <div class="row justify-content-center">
          <div class="col-12 mt-13 dark-mode-texts">
            <div class="mb-9">
              <a
                class="d-flex align-items-center ml-4"
                href="#"
                @click.prevent="$router.go(-1)"
              >
                <i
                  class="mr-5 fa fa-arrow-circle-left bg-white circle-40 pt-3 pl-3 font-size-7 text-black font-weight-bold shadow-8"
                >
                </i
                ><span
                  class="text-uppercase font-size-3 font-weight-bold text-gray"
                >
                  Back</span
                ></a
              >
            </div>
          </div>
        </div>
        <!-- back Button End -->
        <div class="row ">
          <!-- Company Profile -->
          <div class="col-12 col-xl-9 col-lg-8">
            <div class="bg-white rounded-4 pt-11 shadow-9">
              <div
                class="d-xs-flex align-items-center pl-xs-12 mb-8 text-center text-xs-left"
              >
                <a class="mr-xs-7 mb-5 mb-xs-0" href="#">
                  <img
                    class="square-72 rounded-6"
                    :src="getImgUrl(users.photo)"
                    alt=""
                    v-if="users.photo"
                  />
                  <img
                    class="square-72 rounded-6"
                    :src="getImgUrl('noimage.png')"
                    alt=""
                    v-else
                  />
                </a>
                <div class="">
                  <h2 class="mt-xs-n5">
                    <a
                      class="font-size-6 text-black-2 font-weight-semibold"
                      href="#"
                      >{{ users.company_name }}.</a
                    >
                  </h2>
                  <span class="mb-0 text-gray font-size-4">
                    {{ users.category[0].name }}
                  </span>
                </div>
              </div>
              <!-- Tab Section Start -->
              <ul
                class="nav border-bottom border-mercury pl-12"
                id="myTab"
                role="tablist"
              >
                <li class="tab-menu-items nav-item pr-12">
                  <a
                    class="active text-uppercase font-size-3 font-weight-bold text-default-color py-3"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    >Company Information</a
                  >
                </li>
                <li class="tab-menu-items nav-item pr-12">
                  <a
                    class="text-uppercase font-size-3 font-weight-bold text-default-color py-3"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    >All Jobs Posted ({{ alljobs.length }})</a
                  >
                </li>
              </ul>
              <!-- Tab Content -->
              <div
                class="tab-content pl-12 pt-10 pb-7 pr-12 pr-xxl-24"
                id="myTabContent"
              >
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <!-- Middle Body Start -->
                  <div class="row">
                    <!-- Single Widgets Start -->
                    <div class="col-12 col-lg-4 col-md-4 col-xs-6">
                      <div class="mb-8">
                        <p class="font-size-4">Company size</p>
                        <h5
                          class="font-size-4 font-weight-semibold text-black-2"
                        >
                          {{ users.employeeSize }} employees
                        </h5>
                      </div>
                      <div class="mb-8">
                        <p class="font-size-4">Est. Since</p>
                        <h5
                          class="font-size-4 font-weight-semibold text-black-2"
                        >
                          {{ users.yearCreated }}
                        </h5>
                      </div>
                    </div>
                    <!-- Single Widgets End -->
                    <!-- Single Widgets Start -->
                    <div class="col-12 col-lg-4 col-md-4 col-xs-6">
                      <div class="mb-8">
                        <p class="font-size-4">Type of corporation</p>
                        <h5
                          class="font-size-4 font-weight-semibold text-black-2"
                        >
                          {{ users.industry.map(a => a.name).join(" ") }}
                        </h5>
                      </div>
                      <div class="mb-8">
                        <p class="font-size-4">Social Media</p>
                        <div class="icon-link d-flex align-items-center">
                          <a
                            class="text-smoke circle-32 bg-concrete mr-5 hover-bg-green"
                            :href="users.linkedln"
                          >
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a
                            class="text-smoke circle-32 bg-concrete mr-5 hover-bg-green"
                            :href="users.facebook"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a
                            class="text-smoke circle-32 bg-concrete mr-5 hover-bg-green"
                            :href="users.twitter"
                          >
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a
                            class="text-smoke circle-32 bg-concrete mr-5 hover-bg-green"
                            :href="users.website"
                          >
                            <i class="fa fa-globe"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- Single Widgets End -->
                    <!-- Single Widgets Start -->
                    <div class="col-12 col-lg-4 col-md-4 col-xs-6">
                      <div class="mb-8">
                        <p class="font-size-4">Location</p>
                        <h5
                          class="font-size-4 font-weight-semibold text-black-2"
                        >
                          {{ users.city }}, {{ users.country }}
                        </h5>
                      </div>
                    </div>
                    <!-- Single Widgets End -->
                  </div>
                  <!-- Middle Body End -->
                  <!-- Excerpt Start -->
                  <h4
                    class="font-size-6 mb-7 text-black-2 font-weight-semibold"
                  >
                    About {{ users.company_name }}
                  </h4>
                  <div class="pt-5 ">
                    <p class="font-size-4 mb-8">
                      {{ users.about }}
                    </p>
                  </div>
                  <!-- Excerpt End -->
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <!-- Middle Body Start -->
                  <div class="row">
                    <div class="col-lg-6 mb-lg-0 mb-4">
                      <h3 class="font-size-6 mb-0">
                        Posted Jobs
                      </h3>
                    </div>
                    <div class="col-lg-6">
                      <div
                        class="d-flex flex-wrap align-items-center justify-content-lg-end"
                      >
                        <p class="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
                        <div class="h-px-48">
                          <b-form-input
                            v-model="filter"
                            type="search"
                            placeholder="Search jobs...."
                          ></b-form-input>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="bg-white shadow-8 pt-7 rounded pb-9 px-11">
                        <div class="table-responsive ">
                          <b-table
                            responsive
                            caption-top
                            striped
                            hover
                            :items="alljobs"
                            :fields="fields"
                            :per-page="perPage"
                            :current-page="currentPage"
                            :filter="filter"
                            @filtered="onFiltered"
                            :filter-included-fields="filterOn"
                          >
                            <template #cell(title)="data">
                              {{ data.item.title }}
                            </template>
                            <template #cell(industry)="data">
                              {{ data.item.industry }}
                            </template>
                            <template #cell(category)="data">
                              {{ data.item.category }}
                            </template>
                            <template #cell(description)="data">
                              <span v-html="data.item.description"></span>
                            </template>
                            <template #cell(deadline)="data">
                              <pre> {{ data.item.deadline | formatDate }}</pre>
                            </template>
                            <template v-slot:cell(view)="data">
                              <b-button
                                variant="success"
                                :to="{ path: '/jobdetails/' + data.item.slug }"
                              >
                                View
                              </b-button>
                            </template>
                          </b-table>
                        </div>
                        <b-pagination
                          v-model="currentPage"
                          :total-rows="rows"
                          :per-page="perPage"
                        ></b-pagination>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Tab Content End -->
                <!-- Tab Section End -->
              </div>
            </div>
          </div>
          <!-- Company Profile End -->
          <!-- Sidebar -->
          <div class="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6">
            <div class="pt-11 pt-lg-0 pl-lg-5">
              <h4 class="font-size-6 font-weight-semibold mb-0">
                Similar Companies
              </h4>
              <ul
                class="list-unstyled"
                v-for="(tag, index) in comps"
                :key="index"
              >
                <!-- Single List -->
                <li class="border-bottom">
                  <a class="media align-items-center py-9" href="#">
                    <div class="mr-5">
                      <img
                        class="square-72 rounded-5"
                        src="image/l3/png/github-mark.png"
                        alt=""
                      />
                    </div>
                    <div class="mt-n4">
                      <h4 class="mb-0 font-size-6 font-weight-semibold">
                        {{ tag.company_name }}
                      </h4>
                      <p class="mb-0 font-size-4">{{ tag.industry[0].name }}</p>
                    </div>
                  </a>
                </li>
                <!-- Single List End -->
              </ul>
            </div>
          </div>
          <!-- end Sidebar -->
        </div>
      </div>
    </div>
    <!-- Main Content end -->
    <!-- footer area function start -->
    <footers/>
  </div>
</template>

<script>
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
}
import Footers from "./layouts/footer"
import { mapActions } from "vuex";
export default {
  name: "company",
  components: {
    Footers
  },
  data() {
    return {
      users: {},
      comps: [],
      alljobs: [],
      rows: 1,
      perPage: 10,
      currentPage: 1,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      filter: "",
      filterOn: [],
      fields: [
        "title",
        "industry",
        "description",
        "category",
        { key: "deadline", sortable: true },
        "View"
      ]
    };
  },
  methods: {
    ...mapActions(["fetchCompany", "fetchCompanies", "getJobs"]),
    onFiltered(filteredItems) {
      this.rows = filteredItems.length;
      this.currentPage = 1;
    },
    getImgUrl(pic) {
      return `${baseUrl}/${pic}`;
    }
  },
  async mounted() {
    await this.fetchCompany({ cat: this.$route.params.id })
      .then(result => {
        this.users = result.data;
      })
      .catch(error => {
        console.log(error);
        this.$toastr.e(error.response.data.message, "Error!");
      });
    await this.fetchCompanies({ cat: this.users.category[0]._id })
      .then(result => {
        const companies = result.data;
        this.comps = companies.filter(el => el._id != this.users._id);
      })
      .catch(error => {
        console.log(error);
        //   this.$router.push("/");
        this.$toastr.e(error.response.data.message, "Error!");
      });
    await this.getJobs({ cat: this.users._id })
      .then(result => {
        this.alljobs = result.data;
      })
      .catch(error => {
        console.log("error");
        console.log(error);
        //   this.$router.push("/");
        this.$toastr.e(error.response.data.message, "Error!");
      });
  }
};
</script>
