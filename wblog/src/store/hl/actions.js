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
		// axios({
		// 	method:"post",
		// 	url:"/ublog/user/register",
		// 	data:{
		// 		// list:state.arr
		// 		"school_name":"天津商业大学",
		// 		"major_name":"计算机科学与技术",
		// 		"phone":"15122608183",
		// 		"password":"hl19970211",
		// 		"nickname":"嘿嘿嘿",
		// 		"gender":"1"
		// 	}
		// }).then((data)=>{
		// 	console.log(data)
		// })
		axios.get("/ublog/user/register",{
			params:{
				"school_name":"天津商业大学",
				"major_name":"计算机科学与技术",
				"phone":"15122608183",
				"password":"hl19970211",
				"nickname":"嘿嘿嘿",
				"gender":"1"
			}
		}).then((data)=>{
			console.log(data)
		})
	},
	handleLogin({commit,state}){
		// console.log("data")
		axios({
			method:"get",
			url:"/ublog/user/login",
			data:{
				nickname:"zhangfei",   
				password:"123456"
			},
			responseType:"json",
		  }).
		  then((data)=>{
			console.log(data);
			
		  })
	}
}
