<template>
  <div>
    <center>
      <br />
      <h1>Filter User</h1>
    </center>

    <div class="row">
      <div class="col-md-12 col-lg-6">
        <div class="cardbg">
          <form>
            <div class="form-group">
              <select class="form-control" @change="filterUser($event)">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// @ is an alias to /src

export default {
  data: () => ({
    model: {
      name: "",
      age: ""
    }
  }),
  methods: {
    ...mapActions(["filterUser"])
  }
};
</script>

<style scoped></style>
