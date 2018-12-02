import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
/* lxstore */
import lx from "./lx" 
import wcy from "./wcy"
Vue.use(Vuex)

// 公共状态
const state = {
		coilingList:[]
}

// 完成业务逻辑
const actions = {

}

// 对数据进行操作
const mutations = {

}

// 用于计算属性
const getters = {

}


const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
    lx,
		wcy
  }
})

export default store