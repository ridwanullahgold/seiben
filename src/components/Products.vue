<template>
  <div class="row">
    <div class="col-sm-3 bg-light">
      <Categories />
    </div>
    <div class="col-sm-1"></div>
    <div class="col-sm-7">
      <div class="row">
        <div class="col-sm-4 mt-3" v-for="(p, i) in allProducts" :key="i">
          <p>
            <img :src="allProductImages + p.image" alt="" class="img-fluid" />
          </p>
          <h3>
            {{ p.name }}
          </h3>
          <p>{{ p.description }} {{ products.currentPage }}</p>
          <p>Amount: {{ p.price | currency }}</p>
          <button class="btn btn-primary" @click="addProducts(p)">
            Add to Cart
          </button>
        </div>
      </div>
      <paginate />
    </div>
  </div>
</template>

<script>
import Categories from "./../components/Categories";
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
// @ is an alias to /src
import paginate from "./ProductsPagination";
export default {
  name: "Product",
  components: {
    paginate,
    Categories
  },
  data: () => ({
    model: {
      name: "",
      age: ""
    }
  }),
  computed: {
    ...mapGetters(["allProducts", "allProductImages"]),
    ...mapState(["productImages", "products", "currentPage"])
  },
  methods: {
    ...mapActions(["setProductsByCategoryAction"]),
    ...mapMutations(["setCurrentCategory", "setCurrentPage"]),
    ...mapMutations(["addProduct"]),
    addProducts(product) {
      this.addProduct(product);
    }
  },
  created() {
    this.setCurrentPage(1);
    const category = this.$route.params.category;
    this.setProductsByCategoryAction(category);
    this.setCurrentCategory(category);
  },
  beforeRouteUpdate(to, from, next) {
    this.setCurrentPage(1);
    const category = to.params.category;
    this.setProductsByCategoryAction(category);
    this.setCurrentCategory(category);
    next();
  }
};
</script>

<style scoped></style>
