<template>
  <div class="dashboards container-fluid">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="card card-body bg-primary border-dark shadow m-1">
          <form @submit.prevent="addBoard" class="m-2">
            <input
              type="text"
              placeholder="title"
              v-model="newBoard.title"
              required
            />
            <input
              type="text"
              placeholder="description"
              v-model="newBoard.description"
            />
            <button class="btn btn-success border-dark" type="submit">
              Create Board
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="row d-flex flex-wrap justify-content-center">
      <board-component
        v-for="board in boards"
        :key="board.id"
        :boardProp="board"
      >
      </board-component>
    </div>
  </div>
</template>

<script>
import BoardComponent from "../components/BoardComponent.vue";
export default {
  name: "dashboards",
  mounted() {
    this.$store.dispatch("getResource", {
      path: "boards",
      resource: "boards",
    });
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: "",
      },
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    },
  },
  methods: {
    addBoard() {
      this.$store.dispatch("create", {
        getPath: "boards/",
        path: "boards/",
        resource: "boards",
        data: this.newBoard,
      });
      this.newBoard = {};
    },
  },
  components: {
    BoardComponent,
  },
};
</script>
