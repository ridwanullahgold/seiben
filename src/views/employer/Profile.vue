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
                  :src="getImgUrl(profile.photo)"
                  width="150px"
                  height="150px"
                  alt=""
                  srcset=""
                />
              </div> 
              <form>
                <fieldset>
                  <div class="row mb-xl-1 mb-9">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label
                          for="namedash"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Company Name</label
                        >
                        <input
                          v-model="profile.company_name"
                          class="form-control h-px-48"
                          id="namedash"
                          placeholder="eg. Google"
                          required
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
                          :disabled="!allIndustries.length"
                          v-model="profile.industry"
                          required
                        >
                          <option
                            v-for="cat in allIndustries"
                            :value="cat._id"
                            :key="cat.name"
                            :selected="cat._id == profile.industry"
                            >{{ cat.name }}</option
                          >
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-8">
                    <div class="col-lg-6 mb-xl-0 mb-7">
                      <div class="form-group position-relative">
                        <label
                          for="select3"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Employee Size
                        </label>
                        <select
                          id="select3"
                          class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                          v-model="profile.employeeSize"
                        >
                          <option
                            v-for="c in employees"
                            :value="c"
                            :key="c"
                            :selected="c == profile.employeeSize"
                            >{{ c }}</option
                          >
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group position-relative">
                        <label
                          for="address"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Year Established</label
                        >
                        <b-form-input
                          v-model="$v.profile.yearCreated.$model"
                          :state="validateState($v.profile.yearCreated)"
                          id="feedback-user"
                          placeholder="eg. 1991"
                        ></b-form-input>
                        <b-form-invalid-feedback>
                          Not a valid year format
                        </b-form-invalid-feedback>
                      </div>
                    </div>
                    <div class="col-lg-12 mb-xl-0 mb-7">
                      <div class="form-group position-relative">
                        <label
                          for="select3"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Categories
                        </label>
                        <select
                          id="select2"
                          class="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                          :disabled="!allCategories.length"
                          @input="setCategory($event.target.value)"
                          v-model="profile.category"
                        >
                          <option
                            v-for="cat in allCategories"
                            :value="cat._id"
                            :key="cat.name"
                            :selected="cat._id == profile.category"
                            >{{ cat.name }}</option
                          >
                        </select>
                        <!-- {{category == cat.name}} -->
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          for="aboutTextarea"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >About Company</label
                        >
                        <textarea
                          v-model="profile.about"
                          id="aboutTextarea"
                          cols="30"
                          rows="7"
                          class="border border-mercury text-gray w-100 pt-4 pl-6"
                          placeholder="Describe about the company what make it unique"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <input
                        type="submit"
                        value="Save Profile"
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
    <!-- profile container Begins  -->
    <div class="container">
      <!-- socials container Begins -->
      <div class="mb-15 mb-lg-23">
        <div class="row">
          <div class="col-xxxl-9 px-lg-13 px-6">
            <h5 class="font-size-6 font-weight-semibold mb-11">Socials</h5>
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
                          >Facebook</label
                        >
                        <input
                          v-model="profile.facebook"
                          type="text"
                          class="form-control h-px-48"
                          id="namedash"
                          placeholder="eg. www.facebook.com/sieben"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label
                          for="select2"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Twitter</label
                        >
                        <input
                          type="text"
                          v-model="profile.twitter"
                          class="form-control h-px-48"
                          id="namedash"
                          placeholder="eg. www.twitter.com/sieben"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label
                          for="select2"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >LinkedIn</label
                        >
                        <input
                          type="text"
                          v-model="profile.linkedln"
                          class="form-control h-px-48"
                          id="namedash"
                          placeholder="eg. www.linkedin.com/sieben"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label
                          for="select2"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Google-plus</label
                        >
                        <input
                          type="text"
                          v-model="profile.googlePlus"
                          class="form-control h-px-48"
                          id="namedash"
                          placeholder="eg. www.google-plus.com/sieben"
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <input
                        type="submit"
                        value="Save Socials"
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

    <div class="container">
      <!-- socials container Begins -->
      <div class="mb-15 mb-lg-23">
        <div class="row">
          <div class="col-xxxl-9 px-lg-13 px-6">
            <h5 class="font-size-6 font-weight-semibold mb-11">Contact</h5>
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
                          >Phone Number</label
                        >
                        <input
                          type="text"
                          class="form-control h-px-48"
                          id="namedash"
                          v-model="profile.phoneNumber"
                          placeholder="eg. +90 438 447 32 57"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label
                          for="select2"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Email</label
                        >
                        <input
                          type="text"
                          v-model="profile.email"
                          class="form-control h-px-48"
                          id="namedash"
                          placeholder="eg. admin@sieben.com"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label
                          for="select2"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Website</label
                        >
                        <input
                          type="url"
                          v-model="profile.website"
                          class="form-control h-px-48"
                          id="namedash"
                          placeholder="eg. www.siben.com"
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
                          v-model="profile.country"
                          :country="profile.country"
                          class="form-control h-px-48"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <label
                        for="select2"
                        class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >Region</label
                      >
                      <div class="form-group">
                        <region-select
                          :countryName="countryName"
                          :regionName="countryName"
                          v-model="profile.city"
                          :country="profile.country"
                          :region="profile.city"
                          class="form-control"
                          defaultRegion="Germany"
                          placeholder="Select Region"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label
                          for="select2"
                          class="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >Address</label
                        >
                        <input
                          v-model="profile.address"
                          type="text"
                          class="form-control h-px-48"
                          id="namedash"
                          placeholder="No.2, Andela close, Georgia"
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <input
                        type="submit"
                        value="Save Contact"
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
import { validationMixin } from "vuelidate";
import { maxLength } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
import PictureInput from "vue-picture-input";
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000/";
}
export default {
  components: { PictureInput },
  mixins: [validationMixin, authMixin],
  computed: {
    ...mapGetters(["allCategories", "allIndustries", "allUtils"])
  },
  async mounted() {
    // await this.fetchProfiles()
    //   .then(result => {
    this.profile = dataStore.state.auth.user;
    // this.profile.industry = this.profile.industry.map(el => el._id)[0];
    // this.profile.category = this.profile.category.map(el => el._id)[0];
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  },
  data() {
    return {
      image: "",
      countryName: true,
      employees: ["0-50", "51-100", "101-200", "201-500", "500 Above"],
      profile: {
        company_name: "",
        industry: "",
        category: "",
        employeeSize: "",
        yearCreated: "",
        about: "",
        twitter: "",
        linkedln: "",
        googlePlus: "",
        phoneNumber: "",
        website: "",
        country: "",
        city: "",
        address: "",
        photo: ""
      }
    };
  },
  validations: {
    profile: {
      yearCreated: { maxLength: maxLength(4) }
    }
  },
  methods: {
    getImgUrl(pic) {
      return `${baseUrl}${pic}`;
    },
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
      "fetchIndustries",
      "fetchProfiles",
      "updateProfileAction"
    ]),
    setCategory(category) {
      this.$emit("input", parseInt(category));
    },
    setIndustry(industry) {
      this.$emit("input", parseInt(industry));
    },
    validateState(profile) {
      const { $dirty, $error } = profile;
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.profile.$touch();
      if (this.$v.profile.$anyError) {
        return;
      }
      const formData = new FormData();
      if (this.image) {
        formData.append("file", this.image);
      }
      formData.append("profile", JSON.stringify(this.profile));
      this.updateProfileAction(formData)
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
    await this.fetchIndustries();
  }
};
</script>
