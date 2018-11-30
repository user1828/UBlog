import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
/* lxstore */
import lx from "./lx"
import tp from "./tp";
import events from "./events";
Vue.use(Vuex)

// 公共状态
const state = {
  title: "",
  letters: [],
  friendList: [],
  msgList: [],
  arr: [],
  imgs: [],
  commentsl: [],
  comments: []
    
}

// 完成业务逻辑
const actions = {
  throughLetters({
    commit
  }, params) {
    commit("throughLetters", params);
  },
  handleAdd({
    commit
  }) {
    axios({
      method: "get",
      url: "http://localhost:3000/arr",
    }).then((data) => {
      commit("handleAdd", data.data)
      // console.log(data.data)
    })
  }

 
  
}

// 对数据进行操作
const mutations = {
  handleAdd(state, params) {
    state.arr = params;
    var arr = [];
    var arrtime = [];
    params.map((item) => {
      // console.log(item)
      // var list = [];
      // list = item.list;
      state.imgs.push(item.list);
      arr.push(item.list[1].commentslist[1])

      arrtime.push(item.list[2])
    })
    // console.log(arrtime);
    state.comments = arrtime
    state.commentsl = arr
  },
  throughLetters(state) {
    for (var i = 0; i < 26; i++) {
      state.letters.push(String.fromCharCode((65 + i)));
    }
  }
    
    
}

// 用于计算属性
const getters = {

}


const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  axios,
  modules:{
    lx,
    tp,
    events
  }
})

export default store
