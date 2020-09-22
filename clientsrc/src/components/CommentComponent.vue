<template>
  <div class="comment-component">
    <div class="card">
    <p>{{commentProp.body}}</p>
    </div>

  </div>
</template>


<script>
export default {
  name: 'comment-component',
  props: {
    commentProp: {}
  },
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>