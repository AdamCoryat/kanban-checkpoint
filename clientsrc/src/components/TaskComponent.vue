<template>
  <div class="task-component card">
    <button @click="editToggle = !editToggle">Edit</button>
    <button @click="deleteTask">Delete Task</button>
    <select
      v-model="newTaskList.listId"
      @change="moveTask()"
      class="custom-select"
    >
      <option :value="list.id" v-for="list in lists" :key="list.id">{{
        list.title
      }}</option>
    </select>
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
      <form @submit.prevent="addComment" class="md-form" id="comment-add">
        <input
          v-model="newComment.body"
          type="text"
          id="materialSaveFormName"
          class="form-control"
          placeholder="Enter Comment..."
        />
      </form>
    </div>
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
  mounted() {
    this.$store.dispatch("getDictionaries", {
      path: "tasks/" + this.taskProp.id + "/comments",
      resource: "comments",
      parentId: this.taskProp.id,
    });
  },
  data() {
    return {
      taskEdit: {},
      newComment: {},
      newTaskList: {},
      editToggle: false,
      moveToggle: false,
    };
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
    comments() {
      return this.$store.state.comments[this.taskProp.id];
    },
  },
  methods: {
    moveTask() {
      this.$store.dispatch("moveTask", {
        path: "tasks/" + this.taskProp.id,
        data: this.newTaskList,
        id: this.$route.params.id,
        parentId: this.newTaskList.listId,
        oldParentId: this.taskProp.listId,
      });
    },
    editTask() {
      this.$store.dispatch("editDictionaries", {
        getPath: "lists/" + this.taskProp.listId + "/tasks",
        path: "tasks/" + this.taskProp.id,
        resource: "tasks",
        data: this.taskEdit,
        parentId: this.taskProp.listId,
      });
      this.taskEdit = {};
      this.editToggle = false;
    },
    deleteTask() {
      this.$store.dispatch("deleteDictionary", {
        deletePath: "tasks/" + this.taskProp.id,
        path: "lists/" + this.taskProp.listId + "/tasks",
        resource: "tasks",
        parentId: this.taskProp.listId,
      });
    },
    addComment() {
      this.newComment.taskId = this.taskProp.id;
      this.newComment.listId = this.taskProp.listId
      this.newComment.boardId = this.$route.params.id
      this.$store.dispatch("createDictionary", {
        getPath: "tasks/" + this.taskProp.id + "/comments",
        path: "comments",
        resource: "comments",
        data: this.newComment,
        parentId: this.taskProp.id,
      });
      this.newComment = {};
    },
  },
  components: {
    CommentComponent,
  },
};
</script>

<style scoped></style>
