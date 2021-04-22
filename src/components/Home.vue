<template>
  <div>
    <h1 class="text-center">TABLE</h1>
    <div class="add">
      <router-link to="/add">
        <button type="button" class="btn btn-secondary">Add</button>
      </router-link>
    </div>
    <table class="table table-striped" border="1">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Date</th>
          <th scope="col">Status</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <TableContent v-for="item in todos" :key="item.id" :item="item" />
      </tbody>
    </table>
  </div>
</template>

<script>
import TableContent from "./TableContent";
export default {
  components: {
    TableContent,
  },
  mounted() {
    this.$store.dispatch("getList");
  },
  computed: {
    todos() {
      return this.$store.getters.listTodo;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
