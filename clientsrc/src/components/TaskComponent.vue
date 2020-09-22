<template>
  <div class="task-component card">
    <p>{{taskProp.title}}</p>
    <comment-component v-for="comment in comments" :key="comment.id" :commentProp="comment" />
  </div>
</template>


<script>
import CommentComponent from "../components/CommentComponent.vue"
export default {
  name: 'task-component',
  props: {
    taskProp: {}
  },
  data(){
    return {

    }
  },
  mounted(){
    this.$store.dispatch("getComments", {
      path: "tasks/" + this.taskProp.id + "/comments",
      resource: "comments",
      taskId: this.taskProp.id
    });
  },
  computed:{
    comments(){
      return this.$store.state.comments[this.taskProp.id]
    }
  },
  methods:{},
  components:{
    CommentComponent
  }
}
</script>


<style scoped>

</style>