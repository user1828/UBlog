<template>
	<div class="more">
		<div class="more-action">
			<i class="iconfont icon-zuojiantou1" @click="handleBack()"></i>
			<span>更多活动</span>
		</div>
		<div class="space"></div>
		<div class="wrapper" ref="wrapper">
			<div class="contents">
				<div class="content" v-for="(item,index) in moreActive" @click="handleDetails(item.id)">
					<div>
						<img :src="item.src">
					</div>
					<div class="message">
						<h6>地点：{{item.address}}</h6>
						<p>时间：{{item.time}}</p>
						<p>联系方式：{{item.phone}}</p>
						<p>经费：{{item.money}}</p>
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import BScroll from "better-scroll"
	export default{
		data(){
			return{
				
			}
		},
		created(){
			this.handleGetActions();
			this.handleDetails()
		},
		computed:{
			...Vuex.mapState({
				moreActive:state=>state.wcy.moreActive,
			})
		},
		methods:{
			handleBack(){
				this.$router.push("/home")
			},
			handleDetails(){
				this.$router.push("/home")
			},
			...	Vuex.mapActions({
				handleGetActions:"wcy/handleGetActions",
				handleDetails:"wcy/handleDetails"
			})			
		},
// 		mounted(){
// 			this.scroll = new BScroll(this.$refs.wrapper,{
// 				tab:true,
// 				pullingUpLoad:true
// 			})
// 			
// 			this.scroll.on("pullingUp",()=>{
// 				this.handleGetActions()
// 			})
// 		},
// 		updated(){
// 			this.scroll.refresh();
// 			
// 			this.scroll.finishPullUp();
// 		}
	}
</script>

<style>
	.wrapper{
		/* overflow:hidden; */
		height:100%;
	}
	.more-action{
		width:100%;
		padding-top:.4rem;
		height:1.4rem;
		background:#27d1d0;
		color:#fff;
		font-size:.42rem;
		position:fixed;
		top:0;
		z-index:1000;
	}
	.more-action i{
		font-size:.42rem;
		padding-left:.24rem;
		
	}
	.more-action span{
		padding-left:2rem;
		line-height:1rem
	}
	.space{
		height:1.6rem;
	}
	.content img{
		width:3.2rem;
		height:2.2rem;
		margin-right:.22rem;
		
	}
	.content{
		border-bottom:1px solid #eeeeee;
		display:flex;
		padding:0 .24rem .24rem;
		margin:.23rem 0 .26rem 0;
	}
	.message h6{
		font-size:.3rem;
		color:#333333;
		line-height:.6rem;
	}
	.message p{
		color:#adadad;
		font-size:.24rem;
		line-height:.4rem;
	}
</style>