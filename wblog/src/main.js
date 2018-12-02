// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "./js/rem"
import "./css/reset.css"
import '../static/wefont/iconfont.css'
import "../static/wefont/iconfont.js"
import "./css/animate.css"
import verify from "vue-verify-plugin";
	Vue.use(verify,{
		blur:true
	});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
