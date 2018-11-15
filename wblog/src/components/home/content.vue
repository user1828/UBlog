<!-- <template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<div id="content">
				<p>皇城根美食家</p>
				<div class="image">
					<img src="../../../static/img/headerimg.png" alt="">
					<img src="../../../static/img/startbucks.jpg" alt="">
				</div>
				<div class="showpro">
					<h2>玩转星巴克隐藏菜单</h2>
					<div class="hot">
						<div>
							<i class="iconfont icon-xiaoxi4"></i>
							<span>18</span>
						</div>
						<div>
							<i class="iconfont icon-aixin1"></i>
							<span>3k</span>
						</div>
					</div>
				</div>
			</div>
			<div id="content">
				<p>皇城根美食家</p>
				<div class="image">
					<img src="../../../static/img/headerimg.png" alt="">
					<img src="../../../static/img/startbucks.jpg" alt="">
				</div>
				<div class="showpro">
					<h2>玩转星巴克隐藏菜单</h2>
					<div class="hot">
						<div>
							<i class="iconfont icon-xiaoxi4"></i>
							<span>18</span>
						</div>
						<div>
							<i class="iconfont icon-aixin1"></i>
							<span>3k</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import BScroll from 'better-scroll';
	export default{
		created(){
			
		},
		data(){
			return{
				pageNum:1
			}
		},
		computed:{
			...Vuex.mapState({
				
			})
		},
		methods:{
			...Vuex.mapActions({
				
			})
		},
		mounted() {
// 			this.scroll = new BScroll(this.$refs.wrapper,{
// 				tab:true,
// 				pullingUpLoad:true
// 			})
// 			
// 			this.scroll.on("pullingUp",()=>{
// 				
// 			})
		}
	 }

		
</script>

<style scoped>
	.wrapper{
		/* overflow:hidden; */
		height:100%;
	}
	#content{

		height:6rem;
		
		background:#faf7f9;
	}
	#content p{
		padding:.4rem 0 0 1.7rem;
		line-height:.5rem;
		font-size:.22rem;
		color:#666666
	}
	.image{
		position:relative;
		padding-left:.24rem;
	}
	#content .image img:nth-child(1){
		width:1.24rem;
		height:1.24rem;
		position:absolute;
		top:-.7rem;
		
	}
	#content .image img:nth-child(2){
		width:7rem;
		height:4.8rem;
	}
	.showpro{
		display:flex;
		justify-content: space-between;
		padding:.22rem .24rem;
	}
	.hot{
		display:flex;
		width:1.48rem;
		justify-content: space-between;
	}
	.hot div{
		color:#999999;
	}
	.hot div:nth-child(1){
		margin-right:.1rem;
		display:flex;
	}
	.hot div:nth-child(2){
		display:flex;
	}
</style> -->



<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<div id="content">
				<p>皇城根美食家</p>
				<div class="image">
					<img src="../../../static/img/headerimg.png" alt="">
					<img src="../../../static/img/startbucks.jpg" alt="">
				</div>
				<div class="showpro">
					<h2>玩转星巴克隐藏菜单</h2>
					<div class="hot">
						<div>
							<i class="iconfont icon-xiaoxi4"></i>
							<span>18</span>
						</div>
						<div>
							<i class="iconfont icon-aixin1"></i>
							<span>3k</span>
						</div>
					</div>
				</div>
			</div>
			<div id="content">
				<p>皇城根美食家</p>
				<div class="image">
					<img src="../../../static/img/headerimg.png" alt="">
					<img src="../../../static/img/startbucks.jpg" alt="">
				</div>
				<div class="showpro">
					<h2>玩转星巴克隐藏菜单</h2>
					<div class="hot">
						<div>
							<i class="iconfont icon-xiaoxi4"></i>
							<span>18</span>
						</div>
						<div>
							<i class="iconfont icon-aixin1"></i>
							<span>3k</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import BScroll from 'better-scroll';
	export default{
		created(){
			
		},
		data(){
			return{
				pageNum:1
			}
		},
		computed:{
			...Vuex.mapState({
				
			})
		},
		methods:{
			...Vuex.mapActions({
				
			})
		},
		mounted() {
// 			this.scroll = new BScroll(this.$refs.wrapper,{
// 				tab:true,
// 				pullingUpLoad:true
// 			})
// 			
// 			this.scroll.on("pullingUp",()=>{
// 				
// 			})
		}
	 }

		
</script>

<style scoped>
	.wrapper{
		overflow:hidden;
		height:100%;
	}
	#content{

		height:6rem;
		
		background:#faf7f9;
	}
	#content p{
		padding:.4rem 0 0 1.7rem;
		line-height:.5rem;
		font-size:.22rem;
		color:#666666
	}
	.image{
		position:relative;
		padding-left:.24rem;
	}
	#content .image img:nth-child(1){
		width:1.24rem;
		height:1.24rem;
		position:absolute;
		top:-.7rem;
		
	}
	#content .image img:nth-child(2){
		width:7rem;
		height:4.8rem;
	}
	.showpro{
		display:flex;
		justify-content: space-between;
		padding:.22rem .24rem;
	}
	.hot{
		display:flex;
		width:1.48rem;
		justify-content: space-between;
	}
	.hot div{
		color:#999999;
	}
	.hot div:nth-child(1){
		margin-right:.1rem;
		display:flex;
	}
	.hot div:nth-child(2){
		display:flex;
	}
</style>