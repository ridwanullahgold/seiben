<template>
      <div class="mb-18">
        <div class="row mb-11 align-items-center">
          <div class="col-lg-6 mb-lg-0 mb-4">
            <h3 class="font-size-6 mb-0">
              Posted Jobs ({{rows}})
            </h3>
          </div>
          <div class="col-lg-6">
            <div
              class="d-flex flex-wrap align-items-center justify-content-lg-end"
            >
              <p class="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
              <div class="h-px-48">
                <b-form-input
                  v-model="filter"
                  type="search"
                  placeholder="Search jobs...."
                ></b-form-input>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-8 pt-7 rounded pb-9 px-11">
          <div class="table-responsive ">
            <b-table
              responsive
              caption-top
              striped
              hover
              :items="jobs"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              :filter="filter"
              @filtered="onFiltered"
              :filter-included-fields="filterOn"
            >
              <template #cell(title)="data">
                <span class="text-dark font-weight-bold" style="width:150px">{{ data.item.title }}</span>
              </template>
              <template #cell(jobType)="data">
                {{ data.item.type }}
              </template>
              <template #cell(category)="data">
                {{ data.item.category.name }}
              </template>
              <template #cell(city)="data">
                <span v-html="data.item.city"></span>
              </template>
              <template #cell(deadline)="data">
                <pre> {{ data.item.deadline | formatDate }}</pre>
              </template>
              <template #cell(totalApplicants)="">
                1
              </template>
              <template v-slot:cell(edit)="data">
                <b-button
                  variant="success"
                  :to="{ path: '/employer/jobs/edit/' + data.item._id }"
                >
                  Edit
                </b-button>
              </template>
              <template v-slot:cell(delete)="data">
                <b-button variant="danger" @click="deleteItem(data.item._id)">
                  Delete
                </b-button>
              </template>
            </b-table>
          </div>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
          ></b-pagination>
        </div>
      </div>
</template>
<script>

import { mapActions } from "vuex";
export default {
  name: 'MyJobs',

  data() {
    return {
      rows: 1,
      perPage: 10,
      currentPage: 1,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      filter: "",
      filterOn: [],
      jobs: [],
      fields: [
        "title",
        "jobType",
        "city",
        "category",
        { key: "deadline", sortable: true },
        "totalApplicants",
        "Edit",
        "Delete"
      ]
    };
  },
  methods: {
    ...mapActions(["fetchAllJobs", "deleteJob", "getAllJobs"]),
    onFiltered(filteredItems) {
      this.rows = filteredItems.length;
      this.currentPage = 1;
    },
    deleteItem(id) {
      this.jobs = this.jobs.filter(job => job._id !== id);
      this.deleteJob(id)
        .then(() => {
          this.$toastr.e("Job deleted successfully", "Success!");
        })
        .catch(error => {
          this.$toastr.e(error.response.data.message, "Error!");
          this.$router.push("/employer/jobs");
        });
    }
  },
  async created() {
    await this.fetchAllJobs()
      .then(result => {
        console.log(result);
        this.jobs = result.data;
        this.rows = this.jobs.length;
      })
      .catch(error => {
        this.$toastr.e(error.response.data.message, "Error!");
        this.$router.push("/employer/jobs");
      });
  }
};
</script>
