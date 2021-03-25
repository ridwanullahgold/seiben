<template>
  <div class="dashboard-main-container mt-25 mt-lg-31" id="dashboard-body">
    <div class="container">
    <my-jobs></my-jobs>
    </div>
  </div>
</template>
<script>
import authMixin from "./../../mixins/auth";
// import { mapActions } from "vuex";
import MyJobs from "./../../components/MyJobs";
export default {
  name: 'PostedJobs',
  components: {MyJobs},
  mixins: [authMixin],
};
</script>
