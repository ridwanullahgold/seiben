<template>
  <div>
    <Sidebar />
    <router-view></router-view>
  </div>
</template>
<script>
import Sidebar from "./Sidebar";
export default {
  components: {
    Sidebar
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  }
};
</script>
