<template>
  <div class="task-component card bg-task border-dark border rounded my-1">
    <div class="card-title bg-success rounded">
      <p class="d-flex justify-content-between p-1">
        <i
          @click="editToggle = !editToggle"
          class="fa fa-paint-brush text-dark text-left pointer"
          aria-hidden="true"
        ></i>
        <i
          @click="deleteTask"
          class="fa fa-times-circle-o text-danger text-right mx-1 pointer"
          aria-hidden="true"
        ></i>
      </p>
      <h4 class="text-center text-light">{{ taskProp.title }}</h4>
      <p class="d-flex justify-content-between p-1">
        <i
          @click="commentToggle = !commentToggle"
          class="fa fa-plus text-dark text-left pointer"
          aria-hidden="true"
        ></i>
        <i
          @click="moveToggle = !moveToggle"
          class="fa fa-arrows text-dark pointer m-1 text-right"
          aria-hidden="true"
        ></i>
      </p>
    </div>
    <div v-if="moveToggle">
      <select
        v-model="newTaskList.listId"
        @change="moveTask()"
        class="custom-select"
      >
        <option :value="list.id" v-for="list in lists" :key="list.id">{{
          list.title
        }}</option>
      </select>
    </div>

    <form @submit.prevent="editTask" class="md-form" v-if="editToggle">
      <input
        v-model="taskEdit.title"
        type="text"
        id="materialSaveFormName"
        class="form-control"
        placeholder="Task title..."
      />
    </form>
    <div class="card-body" v-if="commentToggle">
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
      commentToggle: false,
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
      this.newComment.listId = this.taskProp.listId;
      this.newComment.boardId = this.$route.params.id;
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

<style scoped>
.bg-task {
  background-color: #86a5a2;
}
</style>
