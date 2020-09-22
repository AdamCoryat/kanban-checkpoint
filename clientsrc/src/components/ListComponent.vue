<template>
  <div class="list-component col-3">
    <div class="card">
    <div class="card-header">
    <h3>{{listProp.title}}</h3>
    </div>
    <div class="card-body p-2">
    <task-component v-for="task in tasks" :key="task.id" :taskProp="task" />
    </div>
    </div>
  </div>
</template>


<script>
import TaskComponent from "../components/TaskComponent.vue"
export default {
  name: 'list-component',
  props: {
    listProp: {}
  },
  data(){
    return {}
  },
  mounted(){
     this.$store.dispatch("getTasks", {
      path: "lists/" + this.listProp.id + "/tasks",
      resource: "tasks",
      listId: this.listProp.id
    });
  },
  computed:{
    tasks(){
        return this.$store.state.tasks[this.listProp.id]
    }
  },
  methods:{

  },
  components:{
    TaskComponent
  }
}
</script>


<style scoped>

</style>