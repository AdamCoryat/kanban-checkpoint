<template>
  <div class="list-component col-3">
    <div class="card">
      <div class="card-header">
        <button @click="editToggle = !editToggle">Edit</button>
        <form @submit.prevent="editList" class="md-form" v-if="editToggle">
          <input
            v-model="listEdit.title"
            type="text"
            id="materialSaveFormName"
            class="form-control"
            placeholder="List title..."
          />
        </form>
        <h3>{{ listProp.title }}</h3>
      </div>
      <div class="card-body p-2">
        <task-component v-for="task in tasks" :key="task.id" :taskProp="task" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskComponent from "../components/TaskComponent.vue";
export default {
  name: "list-component",
  props: {
    listProp: {},
  },
  data() {
    return {
      listEdit: {},
      editToggle: false,
    };
  },
  mounted() {
    this.$store.dispatch("getTasks", {
      path: "lists/" + this.listProp.id + "/tasks",
      resource: "tasks",
      parentId: this.listProp.id,
    });
  },
  computed: {
    tasks() {
      return this.$store.state.tasks[this.listProp.id];
    },
  },
  methods: {
    editList() {
      this.$store.dispatch("edit", {
        path: "lists/" + this.listProp.id,
        data: this.listEdit,
        resource: "lists",
      });
      this.listEdit = {};
      this.editToggle = false;
    },
  },
  components: {
    TaskComponent,
  },
};
</script>

<style scoped></style>
