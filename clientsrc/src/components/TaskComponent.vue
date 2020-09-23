<template>
  <div class="task-component card">
    <button @click="editToggle = !editToggle">Edit</button>
    <button @click="deleteTask">Delete Task</button>
    <form @submit.prevent="editTask" class="md-form" v-if="editToggle">
      <input
        v-model="taskEdit.title"
        type="text"
        id="materialSaveFormName"
        class="form-control"
        placeholder="Task title..."
      />
    </form>
    <p>{{ taskProp.title }}</p>
    <div class="card-body">
      <comment-component
        v-for="comment in comments"
        :key="comment.id"
        :commentProp="comment"
      />
    </div>
  </div>
</template>

<script>
import CommentComponent from "../components/CommentComponent.vue";
export default {
  name: "task-component",
  props: {
    taskProp: {},
  },
  data() {
    return {
      taskEdit: {},
      editToggle: false,
    };
  },
  mounted() {
    this.$store.dispatch("getComments", {
      path: "tasks/" + this.taskProp.id + "/comments",
      resource: "comments",
      parentId: this.taskProp.id,
    });
  },
  computed: {
    comments() {
      return this.$store.state.comments[this.taskProp.id];
    },
  },
  methods: {
    editTask() {
      this.$store.dispatch("editTask", {
        path: "tasks/" + this.taskProp.id,
        resource: "tasks",
        id: this.taskProp.listId,
        data: this.taskEdit,
      });
      this.taskEdit = {};
      this.editToggle = false;
    },
    deleteTask(){
      this.$store.dispatch("deleteDictionary", {
        deletePath: "tasks/" + this.taskProp.id,
        path: "lists/" + this.taskProp.listId + "/tasks",
        resource: "tasks",
        id: this.taskProp.id,
        parentId: this.taskProp.listId
      })
    }
  },
  components: {
    CommentComponent,
  },
};
</script>

<style scoped></style>
