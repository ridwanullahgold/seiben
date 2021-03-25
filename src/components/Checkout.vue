<template>
  <div>
    <center>
      <br />
      <h1>CheckOut Page</h1>
    </center>

    <div class="row">
      <div class="col-md-12 col-lg-6">
        <div class="cardbg">
          <form @submit="onSubmit">
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="$v.order.name.$model"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
              <div class="error" v-if="!$v.order.name.required">
                Field is required
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail</label>
              <input
                type="email"
                class="form-control"
                v-model="order.email"
                aria-describedby="emailHelp"
                placeholder="Enter Your E-mail"
              />
            </div>
            <div class="error" v-if="!$v.order.email.required">
              E-mail is required
            </div>
            <div class="error" v-if="!$v.order.email.email">
              E-mail is not valid
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Address</label>
              <vue-editor
                v-model="order.address"
                useCustomImageHandler="true"
              />
            </div>
            <div class="col-sm-12 d-flex justify-content-around">
              <router-link to="/cart">Back</router-link>
              <button type="submit" class="btn btn-primary">
                Proceed to Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";
import { VueEditor } from "vue2-editor";
export default {
  components: { VueEditor },
  computed: {
    ...mapState({ cart: state => state.cart.cart }),
    ...mapGetters(["itemCount", "totalPrice"])
  },
  validations: {
    order: {
      name: { required },
      email: { required, email },
      address: { required }
    }
  },
  methods: {
    ...mapActions(["storeOrderAction", "clearCart"]),
    async onSubmit(e) {
      e.preventDefault();
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.order["cart"] = JSON.stringify(this.cart);
        this.order["total"] = this.totalPrice;
       
        await this.storeOrderAction(this.order);
        this.clearCart();
        this.$router.push("/thanks");
      }
    }
  },
  data() {
    return {
      order: {
        name: "",
        email: "",
        address: ""
      }
    };
  }
};
</script>

<style scoped></style>
