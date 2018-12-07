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
		axios.post("/ublog/user/register",{
				"school_name":state.arr.school_name,
				"major_name":state.arr.major_name,
				"phone":state.arr.phone,
				"password":state.arr.password,
				"nickname":state.arr.nickname,
				"gender":state.arr.gender,
				
		}).then((data)=>{
			console.log(data)
		})
	},
	// 登录
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
			commit("handlLogin",data.data.id)
			alert("登录成功")
			
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
				"mycode":"18438628193"
			}
		})
		.then((data)=>{
			console.log(data)
		})
	}
	
}
