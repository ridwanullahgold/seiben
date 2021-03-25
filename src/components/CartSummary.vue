<template>
  <div class="float-right text-white">
    <span v-if="itemCount > 0">
      {{ itemCount }} item(s) : {{ totalPrice | currency }}
    </span>
    <span v-else>
      Your cart is empty
    </span>
    <router-link
      v-if="itemCount > 0"
      class="btn btn-primary float-right"
      to="/cart"
    >
      <i class="fa fa-shopping-cart"></i>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// @ is an alias to /src

export default {
  name: "CartSummary",
  computed: {
    ...mapGetters(["itemCount", "totalPrice"])
  }
};
</script>

<style scoped></style>
