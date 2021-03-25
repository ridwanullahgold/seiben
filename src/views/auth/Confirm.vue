<template>
  <h1 class="text-center my-16 text-brown">
    Confirming email ...
  </h1>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["confirmEmail"])
  },
  computed: {
    loggedIn() {
      return (
        this.$store.state.auth.status.loggedIn && this.$store.state.auth.user
      );
    }
  },
  created() {},
  beforeMount() {
    if (this.loggedIn) {
      const users = this.$store.state.auth.user;
      this.$toastr.s(users.role, "Success!");
      if (users.role === "Candidate") {
        this.$router.push("/candidate/profile");
      } else {
        this.$router.push("/employer/profile");
      }
    } else {
      this.confirmEmail({
        token: this.$route.params.token
      })
        .then(user => {
          if (user.data.token) {
            this.$cookie.set("jwt", JSON.stringify(user.data));
          }
          this.$toastr.s("E-mail confirmed successfully!", "Success!");
          if (user.data.user.role === "Candidate") {
            this.$router.push("/candidate/profile");
          } else {
            this.$router.push("/employer/profile");
          }
        })
        .catch(error => {
          this.$toastr.e(error.response.data.message, "Error!");
          this.$router.push("/");
        });
    }
  }
};
</script>
