import axios from 'axios';

export default {
    //获取标签
    getTabs({commit}){
        axios({
            method:'get',
            url:' http://localhost:3000/tab'
        })
        .then((tab)=>{
            commit('getTabs',tab)
            // console.log(tab);
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
        // if(){
        //     commit('handlesearch')
        // }else{
        //     alert("请输入您需要查找的条件");
        // }
        console.log(obj)
    }
}