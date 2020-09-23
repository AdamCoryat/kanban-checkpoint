<template>
  <div class="dashboards container-fluid">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="addBoard">
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
          <button type="submit">Create Board</button>
        </form>
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
        path: "boards/",
        resource: "boards",
        data: this.newBoard,
      });
      this.newBoard = { title: "", description: "" };
    },
  },
  components: {
    BoardComponent,
  },
};
</script>
