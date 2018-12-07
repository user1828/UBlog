import axios from "axios"
export default {
	// 动态获取更多活动
    handleGetActions({commit}){
    	// console.log(params)
    	// if(params<6){
    		axios({
    			method:"get",
    			url:"../../../static/data.json",
    		}).then((data)=>{
    			commit("handleGetActions",data.data.list)
    			// console.log(data);
    		})
   	// }		
    },
	//点击活动列表进行跳转进入详情页
	handleDetails({commit},params){
		// axios({
		// 	method:"get",
		// 	url:"http://localhost:3000/action?" + params
		// }).then((data)=>{
		// 	commit("handleDetails",data)
		// })
	},
	//动态获取优惠卷
	handleGetCoiling({commit}){
		axios({
			method:"get",
			url:"../../../static/data.json"
		}).then((data)=>{
			// console.log(data.data)
			commit("handleGetCoiling",data.data.coupon)
		})		
	},
	//将已经获取到的优惠卷存进数据库
	handleReceiveCoiling({commit},params){
		axios({
			method:"get",
			url:"http://localhost:3000/receive"
		}).then((data)=>{
			commit("handleReceiveCoiling",params)
		})
		
	},
	//跳转到8个标签
	handleTiaoZhuan({commit},params){
		console.log(params)
		axios({
			method:"get",
			url:"/ublog/activity/getactivitybycateid?id="+params+"",
		}).then((data)=>{
			commit("handleTiaoZhuan",data)
			console.log(data)
		})
	}
	
}