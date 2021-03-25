<template>
  <div class="row p-3">
    <div class="col-3 bg-secondary p-2">
      <router-link class="btn btn-block btn-primary" to="/admin/products">
        Products
      </router-link>
      <router-link class="btn btn-block btn-primary" to="/admin/orders">
        Orders
      </router-link>
      <router-link class="btn btn-block btn-primary" to="/admin/users">
        Users
      </router-link>
    </div>
    <div class="col-9 p-2">
      <router-view></router-view>
    </div>
    <center>
      <br />
      <h1></h1>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped></style>
