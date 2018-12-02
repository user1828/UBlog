export default {
	handleGetActions(state,params){
		state.moreActive = [...state.moreActive,...params];
		// console.log(state.moreActive)
	},
	handleGetCoiling(state,params){
		state.coilingList = params;
		var arr = [];
		params.map((item)=>{
			arr.push(item.coupon);
			// console.log(item)
		})
		// console.log(state.coupons)
		state.coupons = arr
		console.log(state.coupons)
	},
	handleReceivecoiling(){
		
	},
	handleDetails(state,params){
		state.id = params;
		console.log(state.id)
	}
}