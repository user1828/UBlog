<template>
	<div id="header">
		<div class="title">
			<div class="logo">
				<div>UBlog</div>
				<i class="iconfont icon-xiaoxi"></i>
				<i class="iconfont icon-wode" @click="handleMy()"></i>
			</div>
			<ul>
				<li @click="handleTui()">推荐</li>
				<li @click="handleFriend()">朋友圈</li>
				<li @click="handleActions()">线下活动</li>
				<li @click="handleKa()">U卡卷</li>
			</ul>
		</div>
	</div>
</template>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
<script>
	export default{
		methods:{
			handleTui(){
				this.$router.push("/")
			},
			handleFriend(){
				this.$router.push("/focus")
			},
			handleActions(){
				this.$router.push("/actions")
			},
			handleKa(){
				this.$router.push("/coiling")
			},
			handleMy(){
				this.$router.push("/my")
			}
		},
		mounted(){
			
		}
	}
</script>

<style>
	#header{
		height:3.5rem;
		background:#27d1d0;		
		width:100%;
		padding-top:.4rem;
	}
	.logo{
		display:flex;
	}
	.logo>div{
		margin-left:3.5rem;
		color:#fff;
		font-size:16px;
		line-hieght:.6rem;
		font-weight:bold;
	}
	.logo>i:nth-of-type(1){
		color:#fff;
		position:absolute;
		right:1.14rem;

	}
	.logo>i:nth-of-type(2){
		color:#fff;
		position:absolute;
		right:.25rem;
	}
	#header ul{
		display:flex;
		justify-content: space-between;
		align-items:center;
		padding:0 35px;
		color:#fff;
		margin-top:.4rem;
		font-weight:bold;
	}
</style>