<template>
  <div>
    <section class="bg">
      <div class="container mt-26 mt-md-22 mt-lg-22 py-15">
        <div class="row no-gutters">
          <div class="col-lg-5 col-md-6 d-none d-md-block">
            <div
              class="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts"
            >
              <!-- <div> -->
              <img src="../../assets/image/man.png" alt="" class="img-fluid" />
              <!-- </div> -->
            </div>
          </div>
          <div class="col-lg-7 col-md-6 bg-white">
            <div class="bg-white-2 h-100 px-11 pt-11 pb-7">
              <div class="row">
                <div class="col-4 col-xs-12 mb-5 text-center">
                  <h3 class="text-success">Login Here</h3>
                </div>
              </div>

              <form @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label
                        for="email"
                        class="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >Email Address</label
                      >
                      <b-form-input
                        type="email"
                        v-model="$v.user.email.$model"
                        :state="validateState($v.user.email)"
                      ></b-form-input>
                      <b-form-invalid-feedback v-if="!$v.user.email.required">
                        E-mail is required
                      </b-form-invalid-feedback>
                      <b-form-invalid-feedback v-if="!$v.user.email.email">
                        E-mail is invalid
                      </b-form-invalid-feedback>
                    </div>
                    <div class="form-group">
                      <label
                        for="password2"
                        class="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >Password</label
                      >
                      <b-form-input
                        type="password"
                        v-model="$v.user.password.$model"
                        required
                        :state="validateState($v.user.password)"
                        id="feedback-user"
                        autocomplete="password"
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
                </div>

                <div
                  class="form-group d-flex flex-wrap justify-content-between mb-1"
                >
                  <label for="terms-check2" class="gr-check-input d-flex  mr-3">
                    <input class="d-none" name="check" type="checkbox" id="terms-check2" />
                    <span class="checkbox mr-5"></span>
                    <span class="font-size-3 mb-0 line-height-reset d-block"
                      >Agree to the
                      <a href="#" class="text-primary"
                        >Terms & Conditions</a
                      ></span
                    >
                  </label>
                  <router-link
                    to="/forgot-password"
                    class="font-size-3 text-dodger line-height-reset"
                    >Forgot Password?</router-link
                  >
                </div>
                <div class="form-group mb-8">
                  <button
                    class="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                  >
                    Login
                  </button>
                </div>

                <!--  <div class="or-devider">
                    <span class="font-size-3 line-height-reset">Or</span>
                  </div> -->

                <div class="row">
                  <div class="col-4 col-xs-12">
                    <a
                      href="#"
                      class="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                      ><i
                        class="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4"
                      ></i>
                      <span class="d-none d-xs-block"
                        >Import from Facebook</span
                      ></a
                    >
                  </div>
                </div>
                <p class="font-size-4 text-center heading-default-color">
                  Don’t have an account?
                  <router-link to="/signup" class="text-primary"
                    >Create a free account</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footers />
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import Footers from "./../layouts/footer";
export default {
  components: {
    Footers
  },
  mixins: [validationMixin],
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    loggedIn() {
      return (
        this.$store.state.auth.status.loggedIn && this.$store.state.auth.user
      );
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(5) }
    }
  },
  methods: {
    ...mapActions(["LogInAction"]),
    validateState(user) {
      const { $dirty, $error } = user;
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      this.LogInAction(this.user)
        .then(user => {
          const token = user.data.token;
          if (token) {
            localStorage.setItem("jwt", token);
            // this.$cookie.set("jwt", JSON.stringify(user.data));

            this.$toastr.s("Logged In Successfully", "Success!");
            if (user.data.user.role === "Candidate") {
              this.$router.push("/candidate/profile");
            } else {
              this.$router.push("/employer/profile");
            }
          } else {
            this.$toastr.e("Login Error", "Error!");

            this.$router.push("/login");
          }
        })
        .catch(error => {
          this.$toastr.e(error.response.data.message, "Error!");
        });

      //  this.$router.push("/login");
    }
  }
};
</script>

<style scoped></style>
