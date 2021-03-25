
<script>
import { mapActions, mapState } from "vuex";
// @ is an alias to /src
import { required, email } from "vuelidate/lib/validators";
export default {
  validations: {
    user: {
      email: { required, email },
      password: { required }
    }
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      showFailureMessage: false
    };
  },
  computed: {
    ...mapState({ authenticated: state => state.auth.authenticated })
  },
  methods: {
    ...mapActions(["authentication"]),
    async onSubmit(e) {
      e.preventDefault();

      this.$v.$touch();
      if (!this.$v.$invalid) {
        await this.authentication(this.user);
        console.log(this.authenticated);
        if (this.authenticated == true) {
          this.$toastr.s("SUCCESS MESSAGE", "Login Successfull");
          this.$router.push("/admin/products");
        } else {
          this.showFailureMessage = true;
          this.$toastr.e("Login Credentials not correct!", "Login Error");
        }
      }
    }
  }
};
</script>
