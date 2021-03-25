<template>
  <div>
    <center>
      <br />
      <h1>Create New User</h1>
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
                v-model="model.name"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
            </div>
            <!-- <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                v-model="model.email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div> -->
            <div class="form-group">
              <label for="exampleInputPassword1">Age</label>
              <input
                type="number"
                v-model="model.age"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
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
      //   password: ""
    }
  }),
  methods: {
    ...mapActions(["addUser"]),
    onSubmit(e) {
      e.preventDefault();
      this.addUser(this.model);
    }
  }
};
</script>

<style scoped></style>
