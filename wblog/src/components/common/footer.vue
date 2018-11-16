<template>
	<div id="footer">
		<ul class="navs">
			<li>							
				<i class="iconfont icon-shouye2" @click="handleHome()"></i>
				<span>首页</span>
			</li>
			<li>
				<i class="iconfont icon-jiahao-fill" @click="handleAdd()"></i>		
			</li>
			<li>					
				
				<i class="iconfont icon-tongxunlu1" @click="handleTel()"></i>
				<span>通讯录</span>
			</li>
		</ul>		
	</div>
</template>

<script>
	import Vuex from "vuex"
	export default{
		methods:{
			handleHome(){
				this.$router.push("/home")
			},
			handleTel(){
				//{path:"/addressList",query:{name:"通讯录"}}
				this.$router.push({path:"/addressList",query:{name:"通讯录"}})
			},
			handleAdd(){
				// this.$router.push("/release")
				//{path:"/chatList",query:{name:"通讯录"}}
				this.$router.push({path:"/chatList",query:{name:"消息"}})
			}
		}
	}
</script>

<style>
	#footer{
		width:100%;
		height:.98rem;		
		position:fixed;
		bottom:0;
		left:0;
		background:#fff;
		z-index:1000;
	}
	#footer>ul{
		width:100%;
		height:100%;
		padding:0 66px;
		display:flex;
		justify-content: space-between;
	}
	#footer>ul>li{
		width:100;
		height:100%;
		display:flex;
		flex-direction:column;
		align-items:center;
	}
	#footer>ul>li:nth-child(1) i,#footer>ul>li:nth-child(3) i{
		font-size:.56rem;
		color:#000000;
	}
	#footer>ul>li:nth-child(2) i{
		color:#27d1d0;
		font-size:.9rem;
		position:absolute;
		top:-.5rem;
	}
	#footer>ul>li>span{
		color:#aaaaaa;
		font-size:12px;
	}
</style>