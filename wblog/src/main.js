
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import "./css/reset.css";
import "./js/rem.js";

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
