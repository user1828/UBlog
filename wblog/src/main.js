
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import store from "./store";
// 引入移动端配置文件
import "./css/reset.css";
import "./js/rem.js";
// 引入icofont图标
import "../static/wefont/iconfont.css"
import "../static/wefont/iconfont.js"

=======
import store from "./store"
import "./css/reset.css"
import "./js/rem"
import "../static/wefont/iconfont.css"
import "../static/wefont/iconfont.js"
>>>>>>> wcy
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
