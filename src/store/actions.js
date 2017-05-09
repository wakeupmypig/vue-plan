import * as types from './types';

export const actions = {
  [types.SAVE_PLAIN]({commit},obj){
    commit(types.SAVE_PLAIN,obj);
  },
  [types.INCREAMENT_TOTALTIME]({commit},time){
    commit(types.INCREAMENT_TOTALTIME,time);
  },
  [types.DELETE_PLAIN]({commit},list){
    commit(types.DELETE_PLAIN,list);
  },
  [types.DECREAMENT_TOTALTIME]({commit},time){
    commit(types.DECREAMENT_TOTALTIME,time);
  }
};
