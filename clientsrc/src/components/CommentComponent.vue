<template>
  <div class="comment-component">
    <div class="card comment-border my-1 bg-warning">
      <div class="text-right">
        <i
          @click="editToggle = !editToggle"
          class="fa fa-paint-brush text-dark text-right pointer"
          aria-hidden="true"
        ></i>
        <i
          @click="deleteComment"
          class="fa fa-times-circle-o text-danger text-right mx-1 pointer"
          aria-hidden="true"
        ></i>
      </div>
      <p class="mx-1 rounded bg-light p-2">{{ commentProp.body }}</p>

      <form @submit.prevent="editComment" class="md-form" v-if="editToggle">
        <input
          v-model="commentEdit.body"
          type="text"
          id="materialSaveFormName"
          class="form-control"
          placeholder="Comment edit..."
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-component",
  props: {
    commentProp: {},
  },
  data() {
    return {
      commentEdit: {},
      editToggle: false,
    };
  },
  computed: {},
  methods: {
    editComment() {
      this.$store.dispatch("editDictionaries", {
        getPath: "tasks/" + this.commentProp.taskId + "/comments",
        path: "comments/" + this.commentProp.id,
        resource: "comments",
        data: this.commentEdit,
        parentId: this.commentProp.taskId,
      });
      this.commentEdit = {};
      this.editToggle = false;
    },
    deleteComment() {
      this.$store.dispatch("deleteDictionary", {
        deletePath: "comments/" + this.commentProp.id,
        path: "tasks/" + this.commentProp.taskId + "/comments",
        resource: "comments",
        id: this.commentProp.id,
        parentId: this.commentProp.taskId,
      });
    },
  },
  components: {},
};
</script>

<style scoped>
.comment-border {
  border: 1px solid rgb(179, 120, 52);
}
</style>
