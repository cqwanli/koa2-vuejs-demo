/**
 * Created by wanli on 17/2/22.
 */
import * as types from '../mutation-types'
const state = {
  projectName: ['KOA', 'Express', 'React', 'Vue', 'Angular', 'Bootstrap', 'Jquery'],
  choisedProject: ""
};
const actions = {
  getProjectName({commit}){
    commit(types.GET_HELLO_MSG);
  }
};
const getters = {
  helloMsg(state){

    if (state.choisedProject.length == 0) {
      return '';
    }
    else {
      return `Hello,${state.choisedProject}`;
    }
  }
}
const mutations = {
  [types.GET_HELLO_MSG](state){
    state.choisedProject = state.projectName[Math.floor(Math.random() * state.projectName.length)];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}