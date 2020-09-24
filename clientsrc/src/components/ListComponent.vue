<template>
  <div class="list-component col-3">
    <div class="card bg-primary border-dark shadow m-1">
      <div class="card-header">
        <p class="d-flex justify-content-between p-1">
          <i
            @click="editToggle = !editToggle"
            class="fa fa-paint-brush text-secondary text-left pointer"
            aria-hidden="true"
          ></i>
          <i
            @click="deleteList"
            class="fa fa-times-circle-o text-danger text-right mx-1 pointer"
            aria-hidden="true"
          ></i>
        </p>
        <form @submit.prevent="editList" class="md-form" v-if="editToggle">
          <input
            v-model="listEdit.title"
            type="text"
            id="materialSaveFormName"
            class="form-control"
            placeholder="List title..."
          />
        </form>
        <h2 class="text-light text-center">{{ listProp.title }}</h2>
        <i
          class="fa fa-bars text-dark pointer"
          @click="listToggle = !listToggle"
          aria-hidden="true"
        ></i>
      </div>
      <div v-if="listToggle">
        <div class="card-body">
          <i
            @click="taskToggle = !taskToggle"
            class="fa fa-plus text-dark text-left pointer"
            aria-hidden="true"
          ></i>
          <form @submit.prevent="addTask" class="md-form" v-if="taskToggle">
            <input
              v-model="newTask.title"
              type="text"
              id="materialSaveFormName"
              class="form-control"
              placeholder="Task title..."
            />
          </form>
        </div>
        <div class="card-body p-2">
          <task-component
            v-for="task in tasks"
            :key="task.id"
            :taskProp="task"
          />
        </div>
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
  mounted() {
    this.$store.dispatch("getDictionaries", {
      path: "lists/" + this.listProp.id + "/tasks",
      resource: "tasks",
      parentId: this.listProp.id,
    });
  },
  data() {
    return {
      listEdit: {},
      newTask: {},
      editToggle: false,
      taskToggle: false,
      listToggle: false,
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks[this.listProp.id];
    },
  },
  methods: {
    editList() {
      this.$store.dispatch("edit", {
        getPath: "boards/" + this.listProp.boardId + "/lists",
        path: "lists/" + this.listProp.id,
        data: this.listEdit,
        resource: "lists",
      });
      this.listEdit = {};
      this.editToggle = false;
    },
    deleteList() {
      this.$store.dispatch("deleteById", {
        deletePath: "lists/" + this.listProp.id,
        id: this.listProp.id,
        resource: "lists",
        path: "boards/" + this.listProp.boardId + "/lists",
      });
    },
    addTask() {
      this.newTask.listId = this.listProp.id;
      this.newTask.boardId = this.$route.params.id;
      this.$store.dispatch("createDictionary", {
        getPath: "lists/" + this.listProp.id + "/tasks",
        path: "tasks",
        resource: "tasks",
        data: this.newTask,
        parentId: this.listProp.id,
      });
      this.newTask = {};
    },
  },
  components: {
    TaskComponent,
  },
};
</script>

<style scoped></style>
