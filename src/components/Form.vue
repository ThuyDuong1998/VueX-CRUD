<template>
  <div>
    <h1 class="text-center">FORM ADD</h1>
    <div style="margin-bottom: 20px">
      <router-link to="/">
        <button type="button" class="btn btn-secondary">Back</button>
      </router-link>
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <table class="table table-striped" border="1">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ValidationProvider
                  rules="required|alpha"
                  v-slot="{ errors, classes }"
                >
                  <div :class="classes">
                    <input type="text" v-model="list.name" /> <br />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </td>
              <td>
                <ValidationProvider
                  rules="required|alpha_dash"
                  v-slot="{ errors, classes }"
                >
                  <div :class="classes">
                    <input type="text" v-model="list.description" /> <br />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </td>
              <td>
                <input type="date" v-model="list.due_date" />
              </td>
              <td>
                <ValidationProvider
                  rules="required|alpha_dash"
                  v-slot="{ errors, classes }"
                >
                  <div :class="classes">
                    <input type="text" v-model="list.status" /> <br>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </td>
              <td>
                <button>+</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div style="display: flex; justify-content: center; margin-top: 40px">
          <button type="button" class="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {
        id: "",
        name: "",
        description: "",
        due_date: "",
        status: "",
      },
    };
  },
  computed: {
    todos() {
      return this.$store.getters.listTodo;
    },
    maxID() {
      const id = Math.max.apply(
        Math,
        this.todos.map((item) => item.id)
      );
      return this.todos.length ? id : 0;
    },
    edit() {
      return this.$store.getters.itemEdit;
    },
  },
  methods: {
    clearInput() {
      (this.list.name = ""),
        (this.list.description = ""),
        (this.list.due_date = ""),
        (this.list.status = "");
    },
    onSubmit() {
      if (!this.list.id) {
        this.list.id = this.maxID + 1;
        this.$store.dispatch("addTodo", this.list);
        this.clearInput();
        this.$router.push("/");
      } else {
        this.$store.dispatch("updateTodo", { ...this.list });
        this.clearInput();
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (this.$route.name === "edit") {
      this.list = { ...this.edit };
    }
  },
};
</script>

<style>
.invalid {
  color: red;
}
</style>
