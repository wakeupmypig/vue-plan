
<template>
    <div>
      <router-link v-show="$route.path == '/time'" to="/time/list" class="btn btn-danger">创建</router-link>
      <h3  v-show="$route.path == '/time/list'">创建</h3>
      <hr>
      <!--主要是添加的作用-->
      <router-view></router-view>

      <div v-show="count==0" class="add">
          亲加一条计划吧~
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="(list,index) in lists">
          <div class="row">
            <div class="col-md-2 text-center" >
              <img :src="list.avatar" alt="" class="img img-circle img-responsive">
              <p>{{list.name}}</p>
            </div>
            <div class="col-md-3">
              <div class="time-block">
                <div>
                  <i class="glyphicon glyphicon-time"></i>
                  {{list.timer}}小时
                </div>
                <label class="label-primary label">
                  <i class="glyphicon-calendar glyphicon"></i>
                  {{list.date}}
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="comment">
                {{list.comment}}
              </div>
            </div>
            <div class="col-md-1">
              <button class="btn btn-danger" @click="remove(list)">&times;</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
    import {mapState,mapActions,mapGetters} from 'vuex'
    export default {
        data(){
            return {}
        },
        computed:{
          ...mapState([
              'lists'
          ]),
          ...mapGetters([
              'count'
          ])
        },
        components: {},
        methods: {
          ...mapActions([
             'deleteplain',
             'decrementTotalTime'
          ]),
          remove(list){
            this.deleteplain(list);
            this.decrementTotalTime(list.timer);
          }
        }
    }
</script>
<style scoped>
  .time-block{
    line-height: 50px;
  }
  .comment{
    padding: 20px;
  }
  li{
    margin: 10px 0px;
  }
  .add{
    font-size: 20px;
    line-height: 40px;
    color: purple;
  }
</style>
