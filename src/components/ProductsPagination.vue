<template>
  <div class="bg-light">
    <nav class="mt-5">
      <ul class="pagination">
        <li class="page-item" v-if="products.currentPage != 1">
          <button
            class="btn btn-secondary mx-2"
            @click="getProducts(products.currentPage - 1)"
          >
            Previous
          </button>
        </li>
        <li class="page-item" v-for="(p, i) in products.pageCount" :key="i">
          <button
            class="btn mx-1"
            :class="[
              i + 1 == products.currentPage ? 'btn-primary' : 'btn-secondary'
            ]"
            @click="getProducts(p)"
          >
            {{ p }}
          </button>
        </li>
        <li class="page-item" v-if="products.currentPage != products.pageCount">
          <button
            class="btn btn-secondary mx-2"
            @click="getProducts(products.currentPage + 1)"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
// @ is an alias to /src

export default {
  name: "Paginate",
  computed: {
    ...mapState(["products", "currentPage", "pageCount"]),
    ...mapGetters(["allProducts"])
  },
  methods: {
    ...mapActions(["setProductsByCategoryPaginationAction"]),
    ...mapMutations(["setCurrentPage"]),
    getProducts(page) {
      this.setProductsByCategoryPaginationAction(page);
      this.setCurrentPage(page);
    }
  }
};
</script>

<style scoped></style>
