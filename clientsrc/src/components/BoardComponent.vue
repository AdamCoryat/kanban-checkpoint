<template>
  <div class="board-component col-3">
    <div class="card m-2">
      <router-link :to="{ name: 'board', params: { id: boardProp.id } }">
        <h1>{{ boardProp.title }}</h1>
      </router-link>
      <button @click="deleteBoard">Delete Board</button>
      <button @click="editToggle = !editToggle">Edit</button>
      <form @submit.prevent="editBoard" class="md-form" v-if="editToggle">
        <input
          v-model="boardEdit.title"
          type="text"
          id="materialSaveFormName"
          class="form-control"
          placeholder="Board title..."
        />
        <input
          v-model="boardEdit.description"
          type="text"
          id="materialSaveFormName"
          class="form-control"
          placeholder="Board description..."
        />
        <button type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-component",
  props: {
    boardProp: {},
  },
  data() {
    return {
      boardEdit: {},
      editToggle: false,
    };
  },
  computed: {},
  methods: {
    editBoard() {
      this.$store.dispatch("edit", {
        getPath: "boards",
        path: "boards/" + this.boardProp.id,
        data: this.boardEdit,
        resource: "boards",
      });
      this.editBoard = {};
      this.editToggle = false;
    },
    deleteBoard() {
      this.$store.dispatch("deleteById", {
        deletePath: "boards/" + this.boardProp.id,
        resource: "boards",
        path: "boards",
      });
    },
  },
  components: {},
};
</script>

<style scoped></style>
