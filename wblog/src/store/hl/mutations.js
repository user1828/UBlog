export default{
	handleTo(state,params){
		state.list.push(params)
		console.log(params)
	},
	handleAdd(state,params){
		localStorage.school = params.sc;
		localStorage.major = params.st;
	},
	handleAddd(state,params){
		state.arr.school_name = localStorage.school;
		state.arr.major_name = localStorage.major;
		state.arr.phone = params.phone;
		state.arr.password = params.psd;
		state.arr.nickname = params.user;
		state.arr.gender = params.gender;
	},
	handleChange(state,params){
		if(params.id == 1){
			state.arr.nickname = params.val
		}else if(params.id == 2){
			state.arr.password = params.val
		}
	},
	handlLogin(state,params){
		state.user_id = params;
	}
}