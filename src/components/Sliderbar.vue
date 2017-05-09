<template>
    <div class="panel panel-default">
      <div class="panel-heading ">
       <h2> 计划总时长</h2>
      </div>
      <div class="panel-body">
        <strong class="text-info h4">
          {{totalTime | changeTimer}}时间
        </strong>
      </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return {}
        },
        computed:{
          ...mapState([
              'totalTime'
          ])
        },
        components: {},
        methods: {},
        filters:{
          changeTimer(val){
            return val.toFixed(2);
          }
        }
    }
</script>
<style scoped>

</style>
