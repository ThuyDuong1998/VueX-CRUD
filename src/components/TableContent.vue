<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.description }}</td>
    <td>{{ item.due_date }}</td>
    <td>{{ item.status }}</td>
    <td>
      <button type="button" class="btn btn-info" @click="clickDel">
        Delete
      </button>
    </td>
    <td>
      <button type="button" class="btn btn-info" @click="clickEdit">
        Edit
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    clickDel() {
      const del = confirm("Do you want delete?");
      if (del) {
        this.$store.dispatch("deleteTodo", this.item.id);
      }
    },
    clickEdit() {
      this.$store.commit("editTodo", this.item);
      this.$router.push("/edit");
    },
  },
};
</script>

<style></style>
