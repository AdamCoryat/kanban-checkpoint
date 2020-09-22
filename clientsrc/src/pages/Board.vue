<template>
  <div class="board">
    <h1 v-if="board.title">{{ board.title }}</h1>
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
export default {
  name: "board",
  data() {
    return {
      list: {
        id: this.list.id,
      },
    };
  },

  mounted() {
    this.$store.dispatch("getResource", {
      path: "boards",
      resource: "activeBoard",
    });
    this.$store.dispatch("getResource", {
      path: "boards/" + this.$route.params.boardId + "/lists",
      resource: "lists",
    });
    this.$store.dispatch("getResource", {
      path: "lists/" + this.list._id + "/tasks",
      resource: "lists",
    });
  },

  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
    list() {
      return this.$store.state.lists;
    },
  },
  props: ["boardId"],
};
</script>
