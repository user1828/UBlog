import axios from 'axios';
const state = {
    arr:[],
    imgs:[],
    commentsl:[],
    comments:[]
}

// 完成业务逻辑
const actions = {
  handleAdd({commit}){
    axios({
    method:"get",
    url:"../../../static/data.json",
    }).then((data)=>{
        commit("handleAdd",data.data.arr)
        console.log(data)
    })
  }
  
}

// 对数据进行操作
const mutations = {
    handleAdd(state,params){
      state.arr = params;
      var arr = [];
      var arrtime = [];
      params.map((item)=>{
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
    }
}

// 用于计算属性
const getters = {

}


export default{
    namespaced:true,
  state,
  actions,
  mutations,
  getters,
}


