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
	handleLogin({commit,state},params){
		axios({
			method:"get",
			url:"/ublog/user/login?username="+ state.arr.nickname + "&password="+state.arr.password+"",
			headers:{
				'Access-Control-Allow-Origin':'*'
			},
			responseType:"json",
		  }).
		  then((data)=>{
			console.log(data);
			
		  })
	},
	handleChange({commit},params){
		commit("handleChange",params)
	},
	handleYanZheng(){
		axios({
			method:"get",
			url:"/ublog/user/mobilecode",
			data:{
				"mycode":"17610002602"
			}
		})
		.then((data)=>{
			console.log(data)
		})
	}
	
}
