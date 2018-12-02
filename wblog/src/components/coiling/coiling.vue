<template>
	<div class="coiling">
		<div class="juan">
			<i class="iconfont icon-zuojiantou1" @click="handleBack()"></i>
			<span>我的优惠卷</span>
		</div>
		<div class="space"></div>
		<div  
		v-for="(item,index) in coupons" 
		:class="item.status? 'list' : 'active'" 
		@click="handleReceiveCoiling(index)"
		>
			<div class="money"><p>{{item.value}}</p></div> 
			<div class="receive">
				<h2>{{item.name}}</h2>
				<h3 v-show="item.status">领取</h3>
				<h4>{{item.shop_name}}</h4>
			</div>			
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	export default{
		data(){
			return{
				active:1,
			}
		},
		computed:{
			...Vuex.mapState({
				coilingList:state=>state.wcy.coilingList,
				coupons:state=>state.wcy.coupons
			})
		},
		created(){
			this.handleGetCoiling();
		},
		methods:{
			handleBack(){
				this.$router.push("/home")
			},
			handleReceiveCoiling(index){
				this.coupons[index].status = false;
				this.show=false
				
			},
			...Vuex.mapActions({
				handleGetCoiling:"wcy/handleGetCoiling",
			})
		},
	}
</script>
<style>
	.coiling{
		background:#fff;
	}
	.juan{
		position:fixed;
		height:1.27rem;
		width:100%;
		background:#27d1d0;
		padding-top:.5rem;
		color:#fff;
		top:0;
		z-index:1000;
	}
	.space{
		height:1.2rem;
	}
	.juan>span{
		padding-left:2rem;
		font-size:.42rem;
	}
	.juan>i{
		padding-left:.3rem;
		font-size:.42rem;
	}
	.list{
		width:6.99rem;
		height:2.4rem;
		margin:.42rem auto .6rem;
		background:url(../../../static/img/coiling.png) no-repeat center;
		background-size:6.99rem 2.4rem;
		box-shadow:1px 6px 2px 0 #eeefff;
	}
	.money>p{
		width:1.54rem;
		height:1.54rem;
		float:left;
		position:relative;
		margin:.4rem 0 0 .6rem;
		color:#fff;
		text-align:center;
		line-height:1.54rem;
		font-size:.68rem;
		font-weight:bold;
		border:.02rem dashed #fff;
	}
	.receive{
		float:left;
		position:relative;
		width:4.85rem;
		height:2.4rem;
	}
	.receive h2{
		padding-left:1.2rem;
		line-height:2.4rem;
		color:#5d8a83;
		font-size:.48rem;
	}
	.receive h3{
		transform:rotate(40deg);
		position:absolute;
		top:.3rem;
		right:.2rem;
		color:#39bebd;
		font-size:.36rem;
	}
	.receive h4{
		position:absolute;
		bottom:.2rem;
		right:.4rem;
		color:#7da19c;
		font-size:.26rem;
	}
	
	
	 .active{
		width:6.99rem;
		height:2.4rem;
		margin:.42rem auto .6rem;
		background:url(../../../static/img/selected.png) no-repeat center;
		background-size:6.99rem 2.4rem;
		box-shadow:1px 6px 2px 0 #eeefff;
	}
</style>