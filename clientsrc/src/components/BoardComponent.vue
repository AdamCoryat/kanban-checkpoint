<template>
  <div class="board-component col-3">
    <div class="card m-2 bg-primary">
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
      <p class="d-flex justify-content-between p-1">
        <i
          @click="editToggle = !editToggle"
          class="fa fa-paint-brush text-secondary text-left pointer"
          aria-hidden="true"
        ></i>
        <i
          @click="deleteBoard"
          class="fa fa-times-circle-o text-danger text-right mx-1 pointer"
          aria-hidden="true"
        ></i>
      </p>
      <router-link :to="{ name: 'board', params: { id: boardProp.id } }">
        <h1 class="text-light text-center">{{ boardProp.title }}</h1>
      </router-link>

      <div class="card-body bg-white border-primary text-dark">
        <p class="text-center">{{ boardProp.description }}</p>
      </div>
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
      this.boardEdit = {};
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
