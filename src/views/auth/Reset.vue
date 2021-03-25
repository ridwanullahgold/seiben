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
                  <h3 class="text-success">Reset Password</h3>
                </div>
              </div>

              <form @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col-lg-12">
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
                    Submit
                  </button>
                </div>
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
import { mapActions } from "vuex";
// @ is an alias to /src
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import Footers from "./../layouts/footer";
export default {
  components: {
    Footers
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
      password: { required, minLength: minLength(5) },
      confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
  },
  data() {
    return {
      user: {
        password: "",
        confirmPassword: ""
      },
      showFailureMessage: false
    };
  },
  methods: {
    ...mapActions(["resetPasswordAction"]),
    validateState(user) {
      const { $dirty, $error } = user;
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      this.resetPasswordAction({
        ...this.user,
        token: this.$route.params.token
      })
        .then(() => {
          this.$toastr.s("Password has been reset successfully", "Success!");
          this.$router.push("/login");
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
