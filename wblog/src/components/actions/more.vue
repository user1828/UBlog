<template>
	<div class="more">
		<div class="more-action">
			<i class="iconfont icon-zuojiantou1" @click="handleBack()"></i>
			<span>更多活动</span>
		</div>
		<div class="content">
			<div>
				<img src="../../../static/img/more.png">
			</div>
			<div class="message">
				<h6>地点：爱上咖啡厅</h6>
				<p>时间：12月10日</p>
				<p>联系方式：15143262320</p>
				<p>经费：50元</p>
			</div>
		</div>
		
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
	.more{
		padding-top:.4rem;
		height:1.4rem;
		background:#27d1d0;
	}
	.more-action{
		color:#fff;
		font-size:.42rem;
		margin-bottom:.4rem;
	}
	.more-action i{
		font-size:.42rem;
		padding-left:.24rem;
		
	}
	.more-action span{
		padding-left:2rem;
		line-height:1rem
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