<template>
  <div class="bg-light">
    <ul class="list-group">
      <li class="list-group-item text-dark text-center">
        <router-link to="/categories/all" class="text-lg">
          All Categories</router-link
        >
      </li>
      <li
        class="list-group-item text-center"
        v-for="(p, i) in allCategories"
        :key="i"
      >
        <router-link :to="'/categories/' + p.slug" class="text-lg">{{
          p.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// @ is an alias to /src

export default {
  data: () => ({
    model: {
      name: "",
      age: ""
    }
  }),
  computed: {
    ...mapGetters(["allCategories"])
  }
};
</script>

<style scoped></style>
