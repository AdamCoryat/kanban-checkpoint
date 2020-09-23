<template>
  <div class="board container-fluid">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="m-2">
          <form @submit.prevent="createList">
            <input
              v-model="newList.title"
              type="text"
              id="materialSaveFormName"
              class="form-control"
              placeholder="Task title..."
            />
          </form>
        </div>
      </div>
    </div>
    <h1 v-if="board.title">{{ board.title }}</h1>
    <div class="row p-2">
      <list-component v-for="list in lists" :key="list.id" :listProp="list" />
    </div>
  </div>
</template>

<script>
import ListComponent from "../components/ListComponent.vue";
export default {
  name: "board",
  props: ["id"],
  data() {
    return {
      newList: {
        boardId: this.id,
      },
    };
  },

  mounted() {
    this.$store.dispatch("getResource", {
      path: "boards",
      resource: "activeBoard",
    });
    this.$store.dispatch("getResource", {
      path: "boards/" + this.$route.params.id + "/lists",
      resource: "lists",
    });
  },
  methods: {
    createList() {
      this.$store.dispatch("create", {
        path: "lists",
        resource: "lists",
        data: this.newList,
      });
    },
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
    ListComponent,
  },
};
</script>
