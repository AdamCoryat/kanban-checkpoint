<template>
  <div class="board-component col-3">
    <router-link :to="{ name: 'board', params: { boardId: boardProp.id } }">
      <div class="card m-2">
        <h1>{{ boardProp.title }}</h1>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "board-component",
  props: {
    boardProp: {},
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped></style>
