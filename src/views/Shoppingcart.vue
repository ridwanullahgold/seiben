<template>
  <div class="row">
    <div class="col-sm-3 bg-light">
      <Categories />
    </div>
    <div class="col-sm-8">
      <h1>Your Cart</h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="itemCount === 0">
            <td colspan="6">Your cart is empty</td>
          </tr>
          <tr v-else v-for="(c, i) in cart" :key="i">
            <td>{{ c.product.name }}</td>
            <td class="ucfirst">{{ c.product.category }}</td>
            <td>{{ c.quantity }}</td>
            <td>
              <button
                class="btn btn-primary small mx-2"
                @click="handleAddProduct(c.product)"
              >
                +
              </button>
              <button
                class="btn btn-warning small mx-2"
                @click="handleSubtractProduct(c.product._id)"
              >
                -
              </button>
              <button
                class="btn btn-danger small mx-2"
                @click="handleRemoveProduct(c.product._id)"
              >
                remove
              </button>
            </td>
            <td>{{ c.product.price | currency }}</td>
            <td>{{ (c.product.price * c.quantity) | currency }}</td>
          </tr>
        </tbody>
        <tfoot v-if="itemCount != 0">
          <tr>
            <td colspan="6" class="text-right">
              <h3>Total : {{ totalPrice | currency }}</h3>
            </td>
          </tr>
          <tr>
            <td colspan="6">
              <button
                class="btn btn-danger float-left"
                @click="handleClearProduct()"
              >
                Clear Cart
              </button>
              <router-link class="btn btn-primary float-right" to="/checkout"
                >Checkout</router-link
              >
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import Categories from "./../components/Categories";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    Categories
  },
  computed: {
    ...mapState({ cart: state => state.cart.cart }),
    ...mapGetters(["itemCount", "totalPrice"])
  },
  methods: {
    ...mapMutations(["addProduct", "subtractProduct", "removeProduct"]),
    ...mapActions(["clearCart"]),
    handleAddProduct(product) {
      this.addProduct(product);
    },
    handleSubtractProduct(product) {
      this.subtractProduct(product);
    },
    handleRemoveProduct(product) {
      this.removeProduct(product);
    },
    handleClearProduct() {
      this.clearCart();
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
