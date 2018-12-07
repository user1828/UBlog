export default {
    getTabs(state, tab) {
        state.tabarr = tab;
        // console.log(tab)
    },
    handleSeltab(state, index) {
        if (state.tabarr[index].status == 0) {
            state.tabarr[index].status = 1;
        } else {
            state.tabarr[index].status = 0
        }
        //console.log(state.seltabarr)
    },
    //添加好友页面跳转选择标签页 + 按钮
    handlexinxi(state, obj) {
        state.searchfriend.name = obj.name;
        state.searchfriend.school = obj.school;
        state.searchfriend.subject = obj.subject;
    },
    handlesearch(state, obj) {
        // console.log(state.searchfriend);

    },
    handlesearch(state, params) {
        // console.log()
        let obj = {}
        if(params.tabarr.length == 0){
             obj = {
                "user":{
                    "nickname": params.name,
                    "school_name": params.school,
                    "major_name": params.subject,
                },
            }
        }else{
            obj = {
                "user":{
                    "nickname": params.name,
                    "school_name": params.school,
                    "major_name": params.subject,
                },
                "tags":{
                    "photo": params.tabarr[0].status,
                    "kaoyan": params.tabarr[1].status,
                    "travel": params.tabarr[2].status,
                    "game": params.tabarr[3].status,
                    "sport": params.tabarr[4].status,
                    "music": params.tabarr[5].status,
                    "cet": params.tabarr[6].status,
                    "movie": params.tabarr[7].status
                }
            };
        }
        
        state.search_frends = obj
    },
    // 搜索好友获得的信息
    getSearchFrends(state,params){
        state.search_add_frends = params.data.object
    },
    // 接受到的请求
    tongyi(state,params){   
        state.jieshou_frends = params
        console.log(params)
    }
}