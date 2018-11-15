<template>
	<div class="actions">
		<transition name="slide">
			<img src="../../../static/img/bg.png">
		</transition>
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
	.actions img{
		width:100%;
		height:100%;
	}
	/* .actions{
		width:100%;
		height:665px;
		background:url(../../../static/img/bg.png) no-repeat center;
		background-size:100% 665px;
	} */
	.top>i{
		font-size:.42rem;
		position:fixed;
		left:.24rem;
		top:.5rem;
		color:#fff;
	}
	.top>span{
		font-size:.42rem;
		position:fixed;
		top:.5rem;
		left:3rem;
		color:#fff;
		
	}
	.actions a{
		display:block;
		background:url(../../../static/img/btn.png) no-repeat center;
		background-size:5rem 1rem;
		width:5rem;
		height:1rem;
		padding-left:1.8rem;
		font-weight:bold;
		position:absolute;
		bottom:1rem;
		left:1.3rem;
		color:#fff;
		line-height:1rem
	}
</style>