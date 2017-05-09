import Vue from 'vue'
import Vuex from 'vuex';

import {actions} from './actions'
import {mutations} from './mutations'
import {getters} from './getters'
Vue.use(Vuex);
import locals from  './local'
const state = locals.getStorage() || {
  totalTime:0,
  lists:[]
};

export const store  = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});

