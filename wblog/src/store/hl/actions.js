import axios from "axios"

export default{
	handleAdd({commit},params){
		commit("handleAdd",params)
		console.log(params)
	},
	handleAddd({commit},params){
		commit("handleAddd",params)
		console.log(params)
	},
	handleTo({commit,state}){
		axios({
			method:"post",
			url:"http://104.248.253.118:8080/ublog/user/register",
			data:{
				list:state.arr
			}
		}).then((data)=>{
			console.log(data)
		})
	},
	handleLogin({commit,state}){
		// console.log("data")
		axios({
			method:"get",
			url:"http://104.248.253.118:8080/ublog/user/login",
			data:{
				nickname:"zhangfei",   
				password:"123456"
			},
			headers:{
				'Access-Control-Allow-Origin':'*'
			},
			responseType:"json",
		  }).
		  then((data)=>{
			console.log(data);
			
		  })
	}
}
