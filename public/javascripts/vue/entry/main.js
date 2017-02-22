/**
 * Created by wanli on 17/2/20.
 */
import Vue from 'vue';
import App from '../components/App.vue';
import store from '../store/index';
new Vue({
  el:"#app",
  store,
  render:h=>h(App)
})