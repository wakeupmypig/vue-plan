# Vuex-状态管理
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态。
## 1.安装vue-cli
### 安装命令行工具
npm install vue-cli -g
### 选择模板
- webpack
- webpack-simple
- browserify
- browserify-simple
- simple
## 2.生成项目
```
vue init <template-name>#版本号 <product-name>
```
## 3.安装依赖并启动
```
$ cd myApp && npm install 
$ npm run dev
$ npm install vuex --save
```

## 4.安装调试工具dev-tool
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

## 5.单向数据流
- state，驱动应用的数据源；
- view，以声明方式将state映射到视图；
- actions，响应在view上的用户输入导致的状态变化。
---
![](https://vuex.vuejs.org/zh-cn/images/flow.png =200x)

## 6.组件共享状态
- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。
![](https://vuex.vuejs.org/zh-cn/images/vuex.png )

## 7.State-状态  
单一状态树:用一个对象就包含了全部的应用层级状态。这个对象就是State，整个应用只能包含一个store的实例。
--- 
使用vuex创建状态,在App.vue下实现计数功能
```
<div id="app">
       <!--count应该归state管理-->
       计数器 {{count}}
       <button>增加</button>
</div>
```
创建store
```
$ cd src && mkdir store
$ cd store && touch index.js
```
```
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  count:0
};
export const store = new Vuex.Store({
  state
});
```
在main.js中引入store
```
import {store} from './store'
new Vue({
  el: '#app',
  router,
  store,
  ...App
});
```
在页面上展示count
```
computed:{
    count(){
        return this.$store.state.count;
    }
}
```
辅助函数`mapState`可以简化写法
```
computed:{
    ...mapState([ // 不更改数据名
        'count'
    ])
    ...mapState({ // 更改数据名
      count:'count'
    })
}
```

## 8.Mutations-突变
更改Vuex中store的数据，只能通过提交mutation，每个mutation都有一个type和回调函数，回调函数中的参数就是当前store中的state
---
创建mutations
```
const INCREMENT = 'increment';
const mutations = {
  [INCREMENT](state,n){
    state.count += n;
  }
};
export const store = new Vuex.Store({
  state,
  mutations
});
```
更改页面count
```
<button @click="add">增加</button>
methods:{
    add(){
        this.$store.commit('increment',1);
    }
}
```
辅助函数`mapMutations可以简化写法
```
import {mapState,mapMutations} from 'vuex';
methods:{
    add(){
        this.increment(2);
    },
    ...mapMutations([
      'increment'
    ])
}
```

> mutation只能写同步方法，一般是通过action中的commit提交到mutation中，我们一般只需派发action即可

## 9.Actions
- Action提交的是mutation，不能直接更改状态 
- Action可以包含异步操作
---
通过action提交到mutation中
```
const actions = {
  [INCREMENT]({commit},n){
    commit(INCREMENT,n)
  }
};
export const store = new Vuex.Store({
  state,
  mutations,
  actions
});
```
直接使用`mapActions`简化操作
```
import {mapState,mapMutations,mapActions} from 'vuex';
methods:{
    add(){
        this.increment(1);
    },
    ...mapActions([
        'increment'
    ])
}
```

## 10.Getters
Vuex 允许我们在 store 中定义『getters』（可以认为是 store 的计算属性）。Getters 接受 state 作为其第一个参数：
---
想判断当前count是奇数还是偶数
```
const getters = {
  computeCount(state){
    return state.count%2==0?'偶数':'奇数'
  }
};
export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
```
直接使用`mapGetters`简化操作
```
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';
computed:{
    ...mapGetters([
        'computeCount'
    ])
},
```
在页面上将变量取出
```
{{count}}
```



# vue-plain

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
