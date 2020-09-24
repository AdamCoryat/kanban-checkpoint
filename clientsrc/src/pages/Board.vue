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
              placeholder="List title..."
            />
          </form>
        </div>
      </div>
    </div>
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
  mounted() {
    this.$store.dispatch("getResource", {
      path: "boards/" + this.$route.params.id,
      resource: "activeBoard",
    });
    this.$store.dispatch("getResource", {
      path: "boards/" + this.$route.params.id + "/lists",
      resource: "lists",
    });
  },
  data() {
    return {
      newList: {},
    };
  },
  computed: {
    board() {
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    },
  },
  methods: {
    createList() {
      this.newList.boardId = this.$route.params.id;
      this.$store.dispatch("create", {
        getPath: "boards/" + this.$route.params.id + "/lists",
        path: "lists",
        resource: "lists",
        data: this.newList,
      });
      this.newList = {};
    },
  },
  components: {
    ListComponent,
  },
};
</script>
