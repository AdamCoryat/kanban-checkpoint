<template>
  <div class="comment-component">
    <div class="card">
      <p>{{ commentProp.body }}</p>
      <button @click="deleteComment">delete</button>
      <button @click="editToggle = !editToggle">Edit</button>
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
      this.$store.dispatch("editComment", {
        path: "comments/" + this.commentProp.id,
        resource: "comments",
        id: this.commentProp.taskId,
        data: this.commentEdit,
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
        parentId: this.commentProp.taskId
      });
    },
  },
  components: {},
};
</script>

<style scoped></style>
