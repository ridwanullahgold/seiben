<template>
  <div>
    <Sidebar />
    <router-view></router-view>
  </div>
</template>
<script>
import Sidebar from "./Sidebar";
import authMixin from "./../../mixins/auth";

export default {
  mixins: [authMixin],
  components: {
    Sidebar
  }
};
</script>
