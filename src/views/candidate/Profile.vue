<template>
  <div class="dashboard-main-container mt-24 mt-lg-31" id="dashboard-body">
    <div class="container">
      <!-- profile container Begins -->
      <div class="mb-15 mb-lg-23">
        <div class="row">
          <div class="col-xxxl-9 px-lg-13 px-6">
            <h5 class="font-size-6 font-weight-semibold mb-11">My Profile</h5>
            <div
              class="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13"
            >
              <div class="upload-file mb-16 text-center">
                <div class="square-144 m-auto px-6 mb-7 text-center">
                  <picture-input
                    ref="pictureInput"
                    @change="onChanged"
                    @remove="onRemoved"
                    :width="1200"
                    :removable="true"
                    removeButtonClass="btn btn-danger btn-sm"
                    :height="1200"
                    accept="image/jpeg, image/png, image/gif"
                    buttonClass="btn btn-secondary btn-sm"
                    :customStrings="{
                      upload: '<h1>Upload it!</h1>',
                      drag: '<h6>Drag and drop your image here</h6>'
                    }"
                  >
                  </picture-input>
                </div>
                <img
                  :src="getImgUrl(profiles.photo)"
                  width="200px"
                  height="100px"
                  alt=""
                  srcset=""
                />
              </div>

              <fieldset>
                <div class="row mb-xl-1 mb-9">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="First Name"
                        v-model="profiles.first_name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="Last Name"
                        v-model="profiles.last_name"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group">
                      <!-- <label for="select2" class="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Job Title</label> -->
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="Job Title"
                        v-model="profiles.job_title"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group">
                      <select
                        id="select3"
                        class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                        :disabled="!allCategories.length"
                        @input="setCategory($event.target.value)"
                        v-model="profiles.category"
                      >
                        <option disabled>Choose Category</option>
                        <option
                          v-for="cat in allCategories"
                          :value="cat._id"
                          :key="cat.name"
                          :selected="cat._id == profiles.category"
                          >{{ cat.name }}</option
                        >
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group">
                      <!-- <label for="select2" class="d-block text-black-2 font-size-4 font-weight-semibold mb-4">University</label> -->
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="University"
                        v-model="profiles.university"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group">
                      <!-- <label for="select2" class="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Year</label> -->
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="Year"
                        v-model="profiles.yearGraduated"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="form-group">
                      <!-- <label for="select2" class="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Course of study</label> -->
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="Course Of Study with Degree"
                        v-model="profiles.course"
                      />
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-group">
                      <!-- <label for="aboutTextarea" class="d-block text-black-2 font-size-4 font-weight-semibold mb-4">About Comapny</label> -->
                      <textarea
                        name="textarea"
                        id="aboutTextarea"
                        cols="30"
                        rows="7"
                        class="border border-mercury text-gray w-100 pt-4 pl-6"
                        placeholder="Description"
                        v-model="profiles.about"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >Experience (in Years)</label
                      >
                      <select
                        id="select3"
                        class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                        v-model="profiles.work_experience"
                        required
                      >
                        <option
                          v-for="c in work_experiences"
                          :value="c"
                          :key="c"
                          :selected="c == profiles.work_experience"
                          >{{ c }}</option
                        >
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >Age</label
                      >
                      <select
                        id="select3"
                        class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                        v-model="profiles.age"
                        required
                      >
                        <option
                          v-for="c in ages"
                          :value="c"
                          :key="c"
                          :selected="c == profiles.age"
                          >{{ c }} years</option
                        >
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4 mt-8"
                        >Highest Level of Education</label
                      >
                      <select
                        id="select3"
                        class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                        v-model="profiles.education"
                        required
                      >
                        <option
                          v-for="c in educations"
                          :value="c"
                          :key="c"
                          :selected="c == profiles.education"
                          >{{ c }}</option
                        >
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4 mt-8"
                        >Gender</label
                      >
                      <select
                        id="select3"
                        class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                        v-model="profiles.gender"
                        required
                      >
                        <option
                          v-for="c in genders"
                          :value="c"
                          :key="c"
                          :selected="c == profiles.gender"
                          >{{ c }}</option
                        >
                      </select>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- profile container Begins  -->

    <div class="container">
      <!-- socials container Begins -->
      <div class="mb-15 mb-lg-23">
        <div class="row">
          <div class="col-xxxl-9 px-lg-13 px-6">
            <h5 class="font-size-6 font-weight-semibold mb-11">
              Work Experience
            </h5>
            <div
              class="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13"
            >
              <fieldset>
                <div class="row mb-xl-1 mb-9">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="Company"
                        v-model="work.company_name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="Role"
                        v-model="work.role"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input
                        type="number"
                        class="form-control h-px-48"
                        placeholder="Years of Experience"
                        v-model="work.year"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        id="aboutTextarea"
                        cols="30"
                        rows="7"
                        class="border border-mercury text-gray w-100 pt-4 pl-6"
                        placeholder="About You"
                        v-model="work.description"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <input
                      type="button"
                      value="Add More"
                      class="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
                      @click="onWorkSubmit"
                    />

                    <hr class="bg-success mb-10" />
                  </div>
                </div>
                <div class="row mb-xl-1 mb-9">
                  <div v-if="profiles.works">
                    <h4 class="col-sm-12">Additional Work Experience</h4>
                    <div
                      v-for="(work, index) in profiles.works"
                      :key="index"
                      class="row"
                    >
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control h-px-48"
                            placeholder="Company"
                            v-model="work.company_name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control h-px-48"
                            placeholder="Role"
                            v-model="work.role"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control h-px-48"
                            placeholder="Years of Experience"
                            v-model="work.year"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            id="aboutTextarea"
                            cols="30"
                            rows="7"
                            class="border border-mercury text-gray w-100 pt-4 pl-6"
                            placeholder="About You"
                            v-model="work.description"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <input
                          type="button"
                          value="Remove"
                          class="btn btn-red btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
                          @click="removeWork"
                        />
                        <hr class="bg-success mb-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- socials container Begins  -->

    <div class="container">
      <!-- socials container Begins -->
      <div class="mb-15 mb-lg-23">
        <div class="row">
          <div class="col-xxxl-9 px-lg-13 px-6">
            <h5 class="font-size-6 font-weight-semibold mb-11">Portfolio</h5>
            <div
              class="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13"
            >
              <fieldset>
                <div class="row mb-xl-1 mb-9">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="Project Name"
                        v-model="portfolio.project_name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="Project Link"
                        v-model="portfolio.project_link"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        v-model="portfolio.project_desc"
                        id="aboutTextarea"
                        cols="30"
                        rows="7"
                        class="border border-mercury text-gray w-100 pt-4 pl-6"
                        placeholder="Description"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <input
                      type="button"
                      value="Add More"
                      class="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
                      @click="onPortfolioSubmit"
                    />

                    <hr class="bg-success mb-10" />
                  </div>
                  <!-- Hello -->

                  <div v-if="profiles.portfolios.length">
                    <h4 class="col-md-12">Additional Portfolio</h4>
                    <div
                      v-for="(portfolio, index) in profiles.portfolios"
                      :key="index"
                      class="row"
                    >
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control h-px-48"
                            placeholder="Project Name"
                            v-model="portfolio.project_name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control h-px-48"
                            placeholder="Project Link"
                            v-model="portfolio.project_link"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            v-model="portfolio.project_desc"
                            id="aboutTextarea"
                            cols="30"
                            rows="7"
                            class="border border-mercury text-gray w-100 pt-4 pl-6"
                            placeholder="Description"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <input
                          type="button"
                          value="Remove"
                          class="btn btn-red btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
                          @click="removePortfolio"
                        />
                      </div>
                    </div>
                    <hr class="bg-success mb-10" />
                  </div>
                </div>
                <!-- Hello end -->
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- socials container Begins  -->
    <div class="container">
      <!-- socials container Begins -->
      <div class="mb-15 mb-lg-23">
        <div class="row">
          <div class="col-xxxl-9 px-lg-13 px-6">
            <h5 class="font-size-6 font-weight-semibold mb-11">Skills</h5>
            <div
              class="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13"
            >
              <fieldset>
                <div class="row mb-xl-1 mb-9">
                  <h4 class="col-lg-12">Skills</h4>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="Professional Skills"
                        v-model="skill.title"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="form-group">
                      <select
                        id="select3"
                        class="form-control nice-select pl-6 mb-7 arrow-3 h-px-48 w-100 font-size-4"
                        v-model="skill.years"
                      >
                        <option
                          v-for="c in work_experiences"
                          :value="c"
                          :key="c"
                          :selected="c == skill.years"
                          >{{ c }}</option
                        >
                      </select>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <input
                      type="button"
                      value="Add More"
                      class="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
                      @click="onSkillSubmit"
                    />

                    <hr class="bg-success mb-10" />
                  </div>

                  <div v-if="profiles.skills">
                    <h4>Additional Skills</h4>
                    <div
                      v-for="(tag, index) in profiles.skills"
                      :key="index"
                      class="row"
                    >
                      <div class="col-lg-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control h-px-48"
                            disabled
                            placeholder="Professional Skills"
                            v-model="tag.title"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <select
                            id="select3"
                            class="form-control nice-select pl-6 mb-7 arrow-3 h-px-48 w-100 font-size-4"
                            disabled
                            v-model="tag.years"
                          >
                            <option
                              v-for="c in work_experiences"
                              :value="c"
                              :key="c"
                              :selected="c == skill.years"
                              >{{ c }}</option
                            >
                          </select>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <input
                          type="button"
                          value="Remove"
                          class="btn btn-red btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
                          @click="removeSkill(index)"
                        />

                        <hr class="bg-success mb-10" />
                      </div>
                    </div>
                  </div>
                  <hr class="bg-success mb-10" />
                </div>

                <!-- Hello end -->
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- socials container Begins  -->

    <div class="container">
      <!-- socials container Begins -->
      <div class="mb-15 mb-lg-23">
        <div class="row">
          <div class="col-xxxl-9 px-lg-13 px-6">
            <h5 class="font-size-6 font-weight-semibold mb-11">Socials</h5>
            <div
              class="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13"
            >
              <fieldset>
                <div class="row mb-xl-1 mb-9">
                  <div class="col-lg-6">
                    <label
                      for="select2"
                      class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                      >Facebook</label
                    >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="www.facebook.com/sieben"
                        v-model="profiles.facebook"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <label
                      for="select2"
                      class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                      >Twitter</label
                    >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="www.twitter.com/sieben"
                        v-model="profiles.twitter"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <label
                      for="select2"
                      class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                      >Google</label
                    >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="www.googel-plus.com/sieben"
                        v-model="profiles.googlePlus"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <label
                      for="select2"
                      class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                      >LinkedIn</label
                    >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control h-px-48"
                        placeholder="www.linkedin.com/sieben"
                        v-model="profiles.linkedln"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- socials container Begins  -->

    <div class="container">
      <!-- socials container Begins -->
      <div class="mb-15 mb-lg-23">
        <div class="row">
          <div class="col-xxxl-9 px-lg-13 px-6">
            <h5 class="font-size-6 font-weight-semibold mb-11">Contact</h5>
            <div
              class="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13"
            >
              <form @submit.prevent="onSubmit" enctype="multipart/form-data">
                <fieldset>
                  <div class="row mb-xl-1 mb-9">
                    <div class="col-lg-6">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >Phone Number</label
                      >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control h-px-48"
                          placeholder="+994 3433 443"
                          v-model="profiles.phoneNumber"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >Email</label
                      >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control h-px-48"
                          placeholder="sieben@gmail.com"
                          :value="profiles.email"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >Website</label
                      >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control h-px-48"
                          placeholder="www.sieben.com"
                          v-model="profiles.website"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >Country</label
                      >
                      <div class="form-group">
                        <country-select
                          :countryName="countryName"
                          v-model="profiles.country"
                          :country="profiles.country"
                          class="form-control h-px-48"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >City</label
                      >
                      <div class="form-group">
                        <region-select
                          :countryName="countryName"
                          :regionName="countryName"
                          v-model="profiles.city"
                          :country="profiles.country"
                          :region="profiles.city"
                          class="form-control"
                          defaultRegion="Germany"
                          placeholder="Select Region"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >Address</label
                      >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control h-px-48"
                          placeholder="No.2, Andela close, Georgia"
                          v-model="profiles.address"
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <input
                        type="submit"
                        value="Save All"
                        class="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- socials container Begins  -->
  </div>
</template>

<script>
import dataStore from "./../../store";
import authMixin from "./../../mixins/auth";
import { mapGetters, mapActions } from "vuex";
import PictureInput from "vue-picture-input";
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000/";
}
export default {
  components: { PictureInput },
  mixins: [authMixin],
  computed: {
    ...mapGetters(["allCategories"])
  },
  async mounted() {
    this.profiles = dataStore.state.auth.user;
  },
  data() {
    return {
      countryName: true,
      image: "",
      salary: "",
      work_experiences: ["0-1", "2-4", "5-10", "10-25"],
      ages: ["10-20", "21-30", "31-40", "41-50", "51-70"],
      educations: [
        "SSCE",
        "OND",
        "HND",
        "Bachelor Degree",
        "Master Degree",
        "Ph.D"
      ],
      genders: ["Male", "Female", "Prefer Not to Say"],
      types: ["Full-Time", "Part-Time", "Freelance", "Intern"],
      levels: ["Beginner", "Intermediate", "Advanced"],
      portfolio: {
        project_name: "",
        project_link: "",
        project_desc: ""
      },
      skill: {
        title: "",
        years: ""
      },
      work: {
        company_name: "",
        role: "",
        year: "",
        description: ""
      },
      profiles: {
        first_name: "",
        last_name: "",
        category: "",
        email: this.$store.state.auth.user.email,
        photo: "noimage.png",
        job_title: "",
        university: "",
        yearGraduated: "",
        course: "",
        about: "",
        work_experience: "",
        age: "",
        education: "",
        gender: "",
        works: [],
        portfolios: [],
        skills: [],
        facebook: "",
        twitter: "",
        linkedln: "",
        googlePlus: "",
        phoneNumber: "",
        website: "",
        country: "",
        city: "",
        address: ""
      }
    };
  },
  methods: {
    onChanged() {
      if (this.$refs.pictureInput.file) {
        const file = this.$refs.pictureInput.file;

        if (file.size > 500000) {
          this.$toastr.w(
            "The image is too large. Maximum size allowed is 500KB",
            "Warning!"
          );
        } else {
          this.image = file;
        }
      } else {
        this.$toastr.w("Old browser. No support for Filereader API", "Error!");
      }
    },
    onRemoved() {
      this.image = "";
    },
    ...mapActions([
      "fetchCategories",
      "fetchProfiles",
      "updateMyProfileAction"
    ]),
    getImgUrl(pic) {
      return `${baseUrl}${pic}`;
    },
    setCategory(category) {
      this.$emit("input", parseInt(category));
    },
    onWorkSubmit() {
      this.profiles["works"].push(this.work);
      this.work = {};
      this.$toastr.i("New information on Work Experience added", "Done!");
    },
    removeWork(index) {
      this.profiles.works.splice(index, 1);
      this.$toastr.i("Information on Work Experience removed", "Done!");
    },
    onPortfolioSubmit() {
      this.profiles["portfolios"].push(this.portfolio);
      this.portfolio = {};
      this.$toastr.i("New information on Portfolio added", "Done!");
    },
    removePortfolio(index) {
      this.profiles.portfolios.splice(index, 1);
      this.$toastr.i("Information on Work Portfolio removed", "Done!");
    },
    onSkillSubmit() {
      this.profiles["skills"].push(this.skill);
      this.skill = {};
      this.$toastr.i("New information on Skills added", "Done!");
    },
    removeSkill(index) {
      this.profiles.skills.splice(index, 1);
      this.$toastr.i("Information on Skills removed", "Done!");
    },
    onSubmit() {
      const formData = new FormData();
      if (this.image) {
        formData.append("file", this.image);
      }
      formData.append("profiles", JSON.stringify(this.profiles));
      this.updateMyProfileAction(formData)
        .then(() => {
          this.$toastr.s("Profile Updated successfully", "Success!");
        })
        .catch(error => {
          console.log(error.response);
          this.$toastr.e(error.response.data.message, "Error!");
        });
    }
  },
  
  async created() {
    await this.fetchCategories();
  }
};
</script>
