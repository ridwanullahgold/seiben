<template>
  <div>
    <FilterTodo />

    <center>
      <br />
      <h1>This is a Todo component</h1>
      <ul class="list-group">
        <li class="list-group-item">
          ALL TODOS
        </li>
        <li class="list-group-item" v-for="(p, i) in allTodos" :key="i">
          {{ i + 1 }}. {{ p.name }}

          <button class="btn btn-danger" @click="deleteUser(p._id)">
            Delete
          </button>
          |
          <button class="btn btn-success" @click="updateUser(p._id)">
            Update
          </button>
        </li>
      </ul>
    </center>

    <hr />
    <AddTodo />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";
import FilterTodo from "@/components/FilterTodo.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AddTodo,
    FilterTodo
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchUsers", "deleteUser", "updateUser"])
  },
  computed: mapGetters(["allTodos"]),
  async created() {
    this.fetchUsers();
  }
};
</script>

<style scoped></style>
