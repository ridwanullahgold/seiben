<template>
  <div>
    <center>
      <br />
      <h1>{{ editMode ? "Edit Product" : "Add Product" }}</h1>
    </center>

    <div class="row">
      <div class="col-md-12 col-lg-6">
        <div class="cardbg">
          <form @submit="onSubmit" enctype="multipart/form-data">
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="product.name"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Description</label>
              <textarea class="form-control" v-model="product.description">
              </textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Price</label>
              <input
                type="text"
                class="form-control"
                v-model="product.price"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
            </div>

            <div class="form-group">
              <label for="dsad">Image</label>
              <input
                type="file"
                class="form-control"
                @change="onFileSelected"
              />
              <p class="mt-3" v-if="editMode">
                Current Image:
                <img
                  :src="allProductImages + product.image"
                  class="img-fluid"
                  width="200px"
                  height="100px"
                />
              </p>
            </div>
            <div class="form-group">
              <label for="cat">Category</label>
              <select class="form-control" @change="onChange">
                <option :value="null">Choose a category</option>
                <option
                  v-for="(c, i) in allCategories"
                  :key="i"
                  :value="c.slug"
                  :selected="c.slug === product.category"
                  >{{ c.name }}</option
                >
              </select>
            </div>
            <button type="submit" class="btn btn-primary">
              {{ editMode ? "Edit Product" : "Add Product" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
// @ is an alias to /src

export default {
  computed: {
    ...mapGetters(["allCategories", "allProductImages"]),
    editMode() {
      return this.$route.params["op"] == "edit";
    }
  },
  data: () => ({
    product: {
      name: "h",
      description: "as",
      price: 2.3,
      image: null,
      category: null
    }
  }),
  methods: {
    ...mapMutations(["setCurrentPage"]),
    ...mapActions(["addProductss", "editProductss"]),
    onFileSelected(e) {
      this.product.imageUpload = e.target.files[0];
    },
    onChange(e) {
      this.product.category = e.target.value;
    },
    async onSubmit(e) {
      e.preventDefault();
      this.product.category = this.product.category;
      // this.order["total"] = this.totalPrice;
      if (this.editMode) {
        this.product.id = this.product._id;
        this.product.imageUpload =
          this.product.imageUpload.name || "noimage.png";
        await this.editProductss(this.product);
      } else {
        console.log(this.product);
        await this.addProductss(this.product);
      }
      this.setCurrentPage(1);
      this.$router.push("/admin/products");
    }
  },
  created() {
    if (this.editMode) {
      Object.assign(
        this.product,
        this.$store.getters.productById(this.$route.params["id"])
      );
    }
  }
};
</script>

<style scoped></style>
