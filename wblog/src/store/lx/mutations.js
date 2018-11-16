export default {
    getTabs(state,tab){
        state.tabarr = tab.data;
        // console.log(tab.data)
    },
    handleSeltab(state,index){
        if(state.tabarr[index].status == 0){
            state.tabarr[index].status = 1;
            state.searchfriend.stab.push(state.tabarr[index]);
        }else{
            state.tabarr[index].status = 0
        }
        //console.log(state.seltabarr)
    },
    //添加好友页面跳转选择标签页 + 按钮
    handlexinxi(state,obj){
        state.searchfriend.name = obj.name;
        state.searchfriend.school = obj.school;
        state.searchfriend.subject = obj.subject;
    },
    handlesearch(state,obj){
      // console.log(state.searchfriend);

    }
}