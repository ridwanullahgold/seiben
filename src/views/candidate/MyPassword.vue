<template>
  <div>
    <Sidebar />
    <div class="dashboard-main-container mt-24 mt-lg-31" id="dashboard-body">
      <div class="container">
        <div class="mb-15 mb-lg-23">
          <div class="row">
            <div class="col-xxxl-9 px-lg-13 px-6">
              <h5 class="font-size-6 font-weight-semibold mb-11">
                Change Password
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
                            for="password2"
                            class="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                            >Old Password</label
                          >
                          <b-form-input
                            type="password"
                            v-model="$v.user.passwordCurrent.$model"
                            required
                            :state="validateState($v.user.passwordCurrent)"
                            id="feedback-user"
                          ></b-form-input>
                          <b-form-invalid-feedback
                            v-if="!$v.user.passwordCurrent.required"
                          >
                            Current Password is required
                          </b-form-invalid-feedback>
                          <b-form-invalid-feedback
                            v-if="!$v.user.passwordCurrent.minLength"
                          >
                            Current Password must be atleast 5 characters
                          </b-form-invalid-feedback>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="form-group">
                          <label
                            for="password2"
                            class="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                            >New Password</label
                          >
                          <b-form-input
                            type="password"
                            v-model="$v.user.password.$model"
                            required
                            :state="validateState($v.user.password)"
                            id="feedback-user"
                          ></b-form-input>
                          <b-form-invalid-feedback
                            v-if="!$v.user.password.required"
                          >
                            Password is required
                          </b-form-invalid-feedback>
                          <b-form-invalid-feedback
                            v-if="!$v.user.password.minLength"
                          >
                            Password must be atleast 5 characters
                          </b-form-invalid-feedback>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="form-group">
                          <label
                            for="password2"
                            class="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                            >Confirm New Password</label
                          >
                          <b-form-input
                            type="password"
                            v-model="$v.user.confirmPassword.$model"
                            required
                            :state="validateState($v.user.confirmPassword)"
                            id="feedback-user"
                          ></b-form-input>
                          <b-form-invalid-feedback
                            v-if="!$v.user.confirmPassword.required"
                          >
                            Confirm Password is required
                          </b-form-invalid-feedback>
                          <b-form-invalid-feedback
                            v-else-if="!$v.user.confirmPassword.sameAsPassword"
                          >
                            Passwords must match
                          </b-form-invalid-feedback>
                          <b-form-valid-feedback>
                            Passwords matched!
                          </b-form-valid-feedback>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <input
                          type="submit"
                          value="Update"
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
    </div>
  </div>
</template>
<script>
import Sidebar from "./Sidebar";
import authMixin from "./../../mixins/auth";
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name: "MyPassword",
  components: {
    Sidebar
  },
  mixins: [validationMixin, authMixin],
  data() {
    return {
      user: {
        passwordCurrent: "",
        password: "",
        confirmPassword: ""
      }
    };
  },

  validations: {
    user: {
      passwordCurrent: { required, minLength: minLength(5) },
      password: { required, minLength: minLength(5) },
      confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
  },
  methods: {
    ...mapActions(["updatePasswordAction"]),
    validateState(user) {
      const { $dirty, $error } = user;
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      this.updatePasswordAction(this.user)
        .then(user => {
          if (user.data.token) {
            localStorage.setItem("jwt", user.data.token);
          }
          this.$toastr.s(
            "Password Changed and Logged In Successfully",
            "Success!"
          );
          if (user.data.user.role === "Candidate") {
            this.$router.push("/candidate/profile");
          } else {
            this.$router.push("/employer/profile");
          }
        })
        .catch(error => {
          console.log(error.response);

          this.$toastr.e(error.response.data.message, "Error!");
        });

      //  this.$router.push("/login");
    }
  }
};
</script>
