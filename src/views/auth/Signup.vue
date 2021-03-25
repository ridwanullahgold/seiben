<template>
  <section class="bg">
    <div class="container mt-26  mt-md-22 mt-lg-22 py-15">
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
              <div class="col-12 col-xs-12">
                <h3 class="text-success">Create an account</h3>
                <p>
                  Set up your account and open yourself to limitless
                  opportunities
                </p>
              </div>
            </div>

            <form @submit.prevent="onSubmit" ref="user">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label
                      for="fname"
                      class="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >First name</label
                    >
                    <b-form-input
                      v-model="$v.user.first_name.$model"
                      :state="validateState($v.user.first_name)"
                      id="feedback-user"
                      placeholder="First Name"
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      First name is required
                    </b-form-invalid-feedback>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label
                      for="lname"
                      class="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >Last name</label
                    >
                    <b-form-input
                      v-model="$v.user.last_name.$model"
                      :state="validateState($v.user.last_name)"
                      id="feedback-user"
                      placeholder="Last Name"
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      Last name is required
                    </b-form-invalid-feedback>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label
                      for="password2"
                      class="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >Category</label
                    >
                    <div class="position-relative">
                      <select
                        v-model="user.role"
                        name="role"
                        class="form-control select2"
                      >
                        <option>Candidate</option>
                        <option>Employer</option>
                      </select>
                    </div>
                  </div>
                </div>
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
                      id="feedback-user"
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
                    ></b-form-input>
                    <b-form-invalid-feedback v-if="!$v.user.password.required">
                      Password is required
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback v-if="!$v.user.password.minLength">
                      Password must be atleast 5 characters
                    </b-form-invalid-feedback>
                  </div>
                  <div class="form-group">
                    <label
                      for="password2"
                      class="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >Confirm Password</label
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

              <div class="form-group mb-8">
                <button
                  class="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                >
                  Sign Up
                </button>
              </div>

              <p class="font-size-4 text-center heading-default-color">
                Registered with us?
                <router-link to="/login" class="text-primary"
                  >Sign in here</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footers />
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
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
        first_name: "",
        last_name: "",
        role: "Candidate",
        email: "",
        password: "",
        confirmPassword: ""
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
      first_name: { required },
      last_name: { required },
      email: { required, email },
      password: { required, minLength: minLength(5) },
      confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
  },
  methods: {
    ...mapActions(["registerUserAction"]),
    validateState(user) {
      const { $dirty, $error } = user;
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      this.registerUserAction(this.user)
        .then(user => {
          let token = user.data.user;
          if (token) {
            // this.$cookie.set("jwt", JSON.stringify(user.data));
            // localStorage.setItem("user", JSON.stringify(user.data.user));
            // localStorage.setItem("jwt", token);
            this.$router.push("/login");
          this.$toastr.s(
            "Registered successfully!!!",
            "Success!"
          );
        } else {
          this.$toastr.e(
            "Something Went Wrong",
            "Error!"
          );
        }
          
          /* if (user.data.user.role === "Candidate") {
            this.$router.push("/candidate");
          } else {
            this.$router.push("/employer");
          } */

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

<style scoped></style>
