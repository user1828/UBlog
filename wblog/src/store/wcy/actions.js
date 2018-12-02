import axios from "axios"
export default {
	// 动态获取更多活动
    handleGetActions({commit}){
    	// console.log(params)
    	// if(params<6){
    		axios({
    			method:"get",
    			url:"http://localhost:3000/list",
    		}).then((data)=>{
    			commit("handleGetActions",data.data)
    			// console.log(data);
    		})
   	// }		
    },
	//点击活动列表进行跳转进入详情页
	handleDetails({commit},params){
		axios({
			method:"get",
			url:"http://localhost:3000/action?" + params
		}).then((data)=>{
			commit("handleDetails",data)
		})
	},
	//动态获取优惠卷
	handleGetCoiling({commit}){
		axios({
			method:"get",
			url:"http://localhost:3000/coupon"
		}).then((data)=>{
			// console.log(data.data)
			commit("handleGetCoiling",data.data)
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
		
	}
	
}