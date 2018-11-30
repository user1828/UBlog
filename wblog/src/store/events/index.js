import axios from 'axios';
const state = {
   arr:[]
}

// 完成业务逻辑
const actions = {
    handleAdd({commit}){
        axios({
        method:"get",
        url:"http://localhost:3000/list",
        }).then((data)=>{
            commit("handleAdd",data.data)
            console.log(data.data)
        })
      }
}

// 对数据进行操作
const mutations = {
    handleAdd(state,params){
        state.list = params;
        params.map((item)=>{
            state.arr.push(item.list.arr[0]);
        })
    //    console.log(state.list[1].arr[0])
    console.log(item.list.arr[0])
      
       
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


