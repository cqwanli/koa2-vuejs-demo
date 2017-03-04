/**
 * Created by wanli on 17/2/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import hello from './modules/hello'
import reasionItems from './modules/reasionItems'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules:{
    hello,
    reasionItems
  }
})