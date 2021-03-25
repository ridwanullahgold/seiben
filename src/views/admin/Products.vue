<template>
  <div class="row">
    <div class="col-sm-12">
      <h1>ALL PRODUCTS</h1>
      <router-link to="/admin/products/add" class="btn btn-warning small mx-2">
        Add Products
      </router-link>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, i) in allProducts" :key="i">
            <td class="align-middle">{{ p.name }}</td>
            <td class="ucfirst">{{ p.category }}</td>
            <td class="align-middle">{{ p.description }}</td>
            <td class="align-middle">{{ p.price | currency }}</td>
            <td class="align-middle">
              <img
                :src="allProductImages + p.image"
                class="img-fluid"
                width="200px"
                height="100px"
              />
            </td>
            <td>
              <button class="btn btn-primary small mx-2" @click="handleEdit(p)">
                Edit
              </button>
              <button
                class="btn btn-warning small mx-2"
                @click="deleteProductss(p)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <paginate />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import paginate from "./../../components/ProductsPagination";
// @ is an alias to /src
export default {
  name: "AdminProduct",
  components: { paginate },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["allProducts", "allProductImages"])
  },
  methods: {
    ...mapActions(["setProductsByCategoryAction", "deleteProductss"]),
    handleEdit(product) {
      this.$router.push(`/admin/products/edit/${product._id}`);
    }
  },
  created() {
    const category = "all";
    this.setProductsByCategoryAction(category);
  }
};
</script>

<style scoped></style>
