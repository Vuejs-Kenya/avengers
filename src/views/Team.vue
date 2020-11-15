<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-header">
            All Avengers

            <div class="float-right">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Type to search"
              />
            </div>
          </div>
          <div class="card-body">
            <div class="text-center text-secondary d-none">
              <div class="spinner-border">
                <span class="sr-only">Loading...</span>
              </div>
              <p>Fetching data...</p>
            </div>

            <table class="table table-striped table-hover">
              <thead class="thead-dark">
                <th></th>
                <th>Actual Name</th>
                <th>Hero Name</th>
                <th>Logo</th>
              </thead>
              <tbody>
                <tr v-for="a in avengers.data" :key="a.id">
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    {{ a.name }}
                  </td>
                  <td>
                    {{ a.nickname }}
                  </td>
                  <td>
                    <img :src="a.avatar" :alt="a.name" class="avatar" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-footer text-center">
            <nav class="justify-content-end">
              <paginate
                :data="avengers"
                @changed="assembleAvengers"
                class="align-middle"
              />
            </nav>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            Add Avenger
          </div>
          <div class="card-body">
            <form class="form">
              <div class="form-group">
                <label>Given Name</label>
                <input class="form-control" type="text" />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-dark btn-block">
                  Save Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import userService from "../services/users";

export default defineComponent({
  setup() {
    const {
      avenger,
      avengers,
      assembleAvengers,
      createAvenger,
      findAvenger,
      updateAvenger,
      deleteAvenger
    } = userService();

    onMounted(() => {
      assembleAvengers();
    });

    return {
      avenger,
      avengers,
      assembleAvengers,
      createAvenger,
      findAvenger,
      updateAvenger,
      deleteAvenger
    };
  }
});
</script>
