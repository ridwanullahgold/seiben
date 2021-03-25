<template>
  <div class="dashboard-main-container mt-24 mt-lg-31" id="dashboard-body">
    <div class="container">
      <!-- profile container Begins -->
      <div class="mb-15 mb-lg-23">
        <div class="row">
          <div class="col-xxxl-9 px-lg-13 px-6">
            <h5 class="font-size-6 font-weight-semibold mb-11">
              {{ editMode ? "Edit Job" : "Post New Job" }}
            </h5>
            <div
              class="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13"
            >
              <form @submit.prevent="onSubmit">
                <fieldset>
                  <div class="row mb-xl-1 mb-9">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label
                          for="namedash"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Job Title</label
                        >
                        <input
                          type="text"
                          v-model="jobs.title"
                          class="form-control h-px-48"
                          id="namedash"
                          placeholder="Designer"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label
                          for="select2"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Industry</label
                        >
                        <select
                          id="select2"
                          class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                          v-model="jobs.industry"
                          required
                        >
                            <option
                            v-for="cat in allIndustries"
                            :value="cat._id"
                            :key="cat.name"
                            :selected="cat._id == jobs.industry"
                            >{{ cat.name }}</option
                          >
                        </select>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          for="aboutTextarea"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Description</label
                        >
                        <vue-editor
                          v-model="jobs.description"
                          placeholder="Describe about the company what make it unique"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-8">
                    <div class="col-lg-6">
                      <div class="form-group position-relative">
                        <label
                          for="address"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Email</label
                        >
                        <input
                          v-model="jobs.email"
                          type="email"
                          class="form-control h-px-48"
                          id="namedash"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6 mb-xl-0 mb-7">
                      <div class="form-group position-relative">
                        <label
                          for="select3"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Gender</label
                        >
                        <select
                          id="select3"
                          class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                          v-model="jobs.gender"
                          required
                        >
                          <option
                            v-for="c in genders"
                            :value="c"
                            :key="c"
                            :selected="c == jobs.gender"
                            >{{ c }}</option
                          >
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-6 mb-xl-0 mb-7">
                      <div class="form-group position-relative">
                        <label
                          for="select3"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Job Type</label
                        >
                        <select
                          id="select3"
                          class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                          v-model="jobs.type"
                          required
                        >
                          <option
                            v-for="c in types"
                            :value="c"
                            :key="c"
                            :selected="c == jobs.type"
                            >{{ c }}</option
                          >
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-6 mb-xl-0 mb-7">
                      <div class="form-group position-relative">
                        <label
                          for="select3"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Categories
                        </label>
                        <select
                          id="select3"
                          class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                          v-model="jobs.category"
                        >
                           <option
                            v-for="cat in allCategories"
                            :value="cat._id"
                            :key="cat.name"
                            :selected="cat._id == jobs.category"
                            >{{ cat.name }}</option
                          >
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label
                          for="select3"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Skill Requirements
                        </label>

                        <div class="tag-input">
                          <div
                            v-for="(tag, index) in jobs.skills"
                            :key="tag"
                            class="tag-input__tag"
                          >
                            <span @click="removeTag(index)">x</span>
                            {{ tag }}
                          </div>
                          <input
                            type="text"
                            placeholder="Add a Skill and press Enter to Add"
                            class="tag-input__text"
                            @keydown.enter="addTag"
                            @keydown.188="addTag"
                            @keydown.delete="removeLastTag"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label
                          for="select3"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Salary Range
                        </label>

                        <HistogramSlider
                          :width="500"
                          :bar-height="100"
                          :data="data"
                          :forceEdges="true"
                          v-model="data"
                          :colors="['#4facfe', '#00f2fe']"
                          :min="10000"
                          :max="1000000"
                        />
                      </div>
                    </div> -->
                    <div class="col-lg-6 mb-xl-0 mb-7">
                      <div class="form-group position-relative">
                        <label
                          for="select3"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4 mt-7"
                          >Job Level
                        </label>
                        <select
                          id="select3"
                          class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                          v-model="jobs.level"
                          required
                        >
                          <option
                            v-for="c in levels"
                            :value="c"
                            :key="c"
                            :selected="c == jobs.level"
                            >{{ c }}</option
                          >
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-6 mb-xl-0 mb-7">
                      <div class="form-group position-relative">
                        <label
                          for="select3"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4 mt-7"
                          >Qualification
                        </label>
                        <select
                          id="select3"
                          class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                          v-model="jobs.qualification"
                        >
                          <option
                            v-for="c in qualifications"
                            :value="c"
                            :key="c"
                            :selected="c == jobs.qualification"
                            >{{ c }}</option
                          >
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group position-relative">
                        <label
                          for="address"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4 mt-7"
                          >Application Deadline</label
                        >
                        <input
                          type="date"
                          class="form-control h-px-48"
                          id="namedash"
                          v-model="jobs.deadline"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group position-relative">
                        <label
                          for="address"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4 mt-7"
                          >Country</label
                        >
                        <country-select
                          :countryName="countryName"
                          v-model="jobs.country"
                          :country="jobs.country"
                          class="form-control h-px-48"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-group position-relative">
                        <label
                          for="address"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4 mt-7"
                          >City</label
                        >
                        <region-select
                          :countryName="countryName"
                          :regionName="countryName"
                          v-model="jobs.city"
                          :country="jobs.country"
                          :region="jobs.city"
                          class="form-control"
                          defaultRegion="Germany"
                          placeholder="Select City"
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          for="aboutTextarea"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4 mt-7"
                          >Complete Address</label
                        >
                        <vue-editor
                          v-model="jobs.address"
                          placeholder="Adewale Street West, Victoria Island, Lagos, Nigeria"
                          class="border border-mercury text-gray w-100 pt-4 pl-6"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <!-- <country-select v-model="jobs.country" :country="jobs.country" topCountry="US" /> -->
                  <!-- <region-select v-model="jobs.city" :country="jobs.country" :region="region" defaultRegion="DE" /> -->
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-green btn-h-60 text-white
                      min-width-px-210 rounded-5 text-uppercase float-right"
                        type="submit"
                      >
                        {{ editMode ? "Edit Profile" : "Save Profile" }}
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- profile container Begins  -->
  </div>
</template>
<script>
import authMixin from "./../../mixins/auth";
import { validationMixin } from "vuelidate";
import { maxLength, minLength } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
export default {
  mixins: [validationMixin, authMixin],
  computed: {
    ...mapGetters(["allJobs", "allCategories", "allIndustries"]),
    editMode() {
      return this.$route.params["op"] == "edit";
    }
  },
  async mounted() {
    if (this.editMode) {
      await this.fetchJobs({ cat: this.$route.params.id })
        .then(result => {
          this.jobs = result.data;
        })
        .catch(error => {
          this.$toastr.e(error.response.data.message, "Error!");
          this.$router.push("/employer/jobs");
        });
    }
  },
  data() {
    return {
      utils: {},
      countryName: true,
      // regionName:true,
      //   country:"",
      // region:"",
      data: [10000 - 1000000],
      salary: "",
      genders: ["Both", "Male", "Female"],
      types: ["Full-Time", "Part-Time", "Freelance", "Intern"],
      levels: ["Beginner", "Intermediate", "Advanced"],
      qualifications: [
        "SSCE",
        "OND",
        "HND",
        "Bachelor Degree",
        "Master Degree",
        "Ph.D"
      ],
      jobs: {
        title: "",
        industry: "",
        category: "",
        description: "",
        email: this.$store.state.auth.user.email,
        salary: "",
        gender: "",
        level: "",
        type: "",
        qualification: "",
        deadline: "",
        skills: ["Laravel"],
        country: "",
        city: "",
        address: "",
        findmap: "",
        latitude: "",
        longitude: ""
      }
    };
  },
  validations: {
    jobs: {
      yearCreated: { maxLength: maxLength(4), minLength: minLength(4) }
    }
  },
  methods: {
    ...mapActions([
      "fetchCategories",
      "fetchJobs",
      "fetchUtils",
      "fetchIndustries",
      "addJobAction",
      "updateJobAction"
    ]),
    addTag(event) {
      event.preventDefault();
      var val = event.target.value.trim();
      if (val.length > 0) {
        this.jobs["skills"].push(val);
        event.target.value = "";
      }
    },
    removeTag(index) {
      this.jobs.skills.splice(index, 1);
    },
    removeLastTag(event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.jobs.skills.length - 1);
      }
    },
    setCategory(category) {
      this.$emit("input", parseInt(category));
    },
    setIndustry(industry) {
      this.$emit("input", parseInt(industry));
    },
    validateState(jobs) {
      const { $dirty, $error } = jobs;
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.jobs.$touch();
      if (this.$v.jobs.$anyError) {
        return;
      }
      if (this.editMode) {
        this.updateJobAction({ ...this.jobs, cat: this.$route.params.id })
          .then(() => {
            this.$toastr.s("Job Edited successfully", "Success!");
            this.$router.push("/employer/jobs");
          })
          .catch(error => {
            console.log(error.response);
            this.$toastr.e(error.response.data.message, "Error!");
          });
      } else {
        console.log(this.jobs)
        this.addJobAction(this.jobs)
          .then(() => {
            this.$toastr.s("Job Added successfully", "Success!");
            this.$router.push("/employer/jobs");
          })
          .catch(error => {
            console.log(error.response);
            this.$toastr.e(error.response.data.message, "Error!");
          });
      }
    }
  },
  async created() {
    this.fetchUtils()
      .then(result => {
        this.utils = result;
      })
      .catch(error => {
        console.log(error.response);
        this.$toastr.e(error.response.data.message, "Error!");
      });
    await this.fetchCategories();
    await this.fetchIndustries();
  }
};
</script>

<style src="@/assets/plugins/ui-range-slider/jquery-ui.css"></style>
<style scoped>
.tag-input {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 50px;
  box-sizing: border-box;
  padding: 0 20px;
}

.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 15px;
  border-radius: 5px;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input__text {
  border: none;
  outline: none;
  width: 160px;
  font-size: 0.9em;
  line-height: 50px;
  background: none;
}
</style>
