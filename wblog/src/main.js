
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import store from "./store";
// 引入移动端配置文件
import "./css/reset.css";
import "./js/rem.js";
// 引入icofont图标
=======
import "./js/rem.js"
import "./css/reset.css"
import "../static/wefont/iconfont.css"
import "../static/wefont/iconfont.js"
>>>>>>> hl

Vue.config.productionTip = false
import "../static/wefont/iconfont.css"
import "../static/wefont/iconfont.js"
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
