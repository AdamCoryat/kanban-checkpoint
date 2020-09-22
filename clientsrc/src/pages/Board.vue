<template>
  <div class="board container-fluid">
    <h1 v-if="board.title">{{ board.title }}</h1>
    <div class="row p-2">
    <list-component v-for="list in lists" :key="list.id" :listProp="list" />
    </div>
  </div>
</template>

<script>
import ListComponent from "../components/ListComponent.vue"
export default {
  name: "board",
  props: ["boardId"],
  data() {
    return {
      // list: {
      //   id: this.list.id,
      // },
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
  },

  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    },
  },
  components: {
  ListComponent
  },
};
</script>
