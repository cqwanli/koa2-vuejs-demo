/**
 * Created by wanli on 17/3/4.
 */
import * as types from '../mutation-types'
const state = {
  step1: false,
  step2: false
};
const actions = {
  startTheAnimation({commit}, addTurns){
    commit(types.THE_ANIMATION_STEP_1);
    setTimeout(()=> {
      commit(types.THE_ANIMATION_STEP_2);
    }, 3500 + 200 * parseInt(addTurns));
  }
};
const mutations = {
  [types.THE_ANIMATION_STEP_1](state){
    state.step1 = true;
  },
  [types.THE_ANIMATION_STEP_2](state){
    state.step1 = false;
    state.step2 = true;
  }
};
export default {
  state,
  actions,
  mutations
}