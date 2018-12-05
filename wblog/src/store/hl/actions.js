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
			url:"/ublog/user/register",
			data:{
				"nickname":"啦啦啦",
				"gender":"男",
				"phone":"18438628193",
				"school_name":"洛阳理工",
				"password":"123456",
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
