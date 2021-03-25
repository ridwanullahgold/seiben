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
                  <h3 class="text-success">Forgot Password Form</h3>
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
                        id="feedback-user"
                      ></b-form-input>
                      <b-form-invalid-feedback v-if="!$v.user.email.required">
                        E-mail is required
                      </b-form-invalid-feedback>
                      <b-form-invalid-feedback v-if="!$v.user.email.email">
                        E-mail is invalid
                      </b-form-invalid-feedback>
                    </div>
                  </div>
                </div>

                <div class="form-group mb-8">
                  <button
                    class="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                  >
                    Reset Password
                  </button>
                </div>

                <!--  <div class="or-devider">
                    <span class="font-size-3 line-height-reset">Or</span>
                  </div> -->
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
import { required, email } from "vuelidate/lib/validators";
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
        email: ""
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
      email: { required, email }
    }
  },
  methods: {
    ...mapActions(["ForgotPassword"]),
    validateState(user) {
      const { $dirty, $error } = user;
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      this.ForgotPassword(this.user)
        .then(user => {
          if (user) {
            this.$toastr.s("Token sent to email", "Success!");
          } else {
            this.$toastr.s("Error sending email", "Error!");
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
