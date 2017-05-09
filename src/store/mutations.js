import * as types from './types';
import locals from './local';
let { setStorage }  = locals;
export const mutations = {
  [types.SAVE_PLAIN](state,obj){
     Object.assign(obj,{avatar:'http://f11.baidu.com/it/u=2754208607,630952272&fm=72',name:'jw'});
     state.lists.push(obj);
     setStorage(state);
  },
  [types.INCREAMENT_TOTALTIME](state,time){
    state.totalTime += time
    setStorage(state);
  },
  [types.DELETE_PLAIN](state,list){
    state.lists = state.lists.filter(item=>list!=item);
    setStorage(state);
  },
  [types.DECREAMENT_TOTALTIME](state,time){
     state.totalTime -= time;
     setStorage(state);
  }
};
