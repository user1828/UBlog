<template>
	<div class="actions">
		<div class="top">
			<i class="iconfont icon-zuojiantou1" @click="handleBack()"></i>
			<span>线下活动</span>
		</div>
		<a href="#/more">更多活动</a>
	</div>	
</template>

<script>
	export default{
		methods:{
			handleBack(){
				this.$router.push("/home")
			}
		}
	}
</script>

<style>
	.top{
		width:100%;
		height:1.1rem;
		color:#fff;
		padding-top:.4rem;
		line-height:1rem;
	}
	.actions{
		width:100%;
		height:665px;
		background:url(../../../static/img/bg.png) no-repeat center;
		background-size:100% 665px;
	}
	.top>i{
		font-size:.42rem;
		padding-left:.24rem
	}
	.top>span{
		font-size:.42rem;
		padding-left:2rem;
	}
	.actions a{
		display:block;
		background:url(../../../static/img/btn.png) no-repeat center;
		background-size:5rem 1rem;
		width:5rem;
		height:1rem;
		border:none;
		padding-left:1.8rem;
		font-weight:bold;
		position:absolute;
		bottom:1rem;
		left:1.3rem;
		color:#fff;
		line-height:1rem
	}
</style>