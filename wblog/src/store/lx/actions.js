import axios from 'axios';

export default {
    //获取标签
    getTabs({commit}){
        axios({
            method:'get',
            url:'../../../static/data.json'
        })
        .then((data)=>{
            commit('getTabs',data.data.tab)
        })
    },
    //标签页 选中标签  记录标签
    handleSeltab({commit},index){
        commit('handleSeltab',index)
    },
    //添加好友页面跳转选择标签页 + 按钮
    handlexinxi({commit},obj){
        commit('handlexinxi',obj)
    },
    //搜索符合条件的好友
    handlesearch({commit},obj){
        commit("handlesearch",obj)
        console.log(obj)
    },
    //点击发送添加好友请求
    handleAddFriend({commit},params){
        axios({
            method:"get",
            url:"ublog/myinfo/add_to_waittable?fid="+params+"&mas=加好友"
        })
        .then((data)=>{
            console.log(data)
        })
    },
    //搜索到好友的信息
    getSearchFrends({commit},params){
        axios({
            method:"post",
            url:"ublog/myinfo/find_new_friend",
            data:{
                "user": {
                    "nickname":null,
                    "school_name":null,
                    "major_name":null
                 },
                 "tags": {
                     "photo": "0", 
                     "kaoyan": "0",
                     "travel": "0",
                     "game": "0",
                     "sport": "0",
                     "music": "0",
                     "cet": "0",
                     "movie": "0"
                  }
          
            },
        })
        .then((data)=>{
            // console.log(data)
            commit("getSearchFrends",data)
        })
    },

    // 接受到的好友请求
    tongyi({commit}){
        axios({
            method:"get",
            url:"ublog/myinfo/find_all_newfriend"
        })
        .then((data)=>{
           
            commit("tongyi",data.data.object)
        })
    }
}