<template>
	<div class="coiling">
		<div class="juan">
			<i class="iconfont icon-zuojiantou1" @click="handleBack()"></i>
			<span>我的优惠卷</span>
		</div>
		<div class="list">
			<div><p>￥3</p></div>
			<div>
				<h2>青春不散场</h2>
				<h3>领取</h3>
				<h4>麦迪KTV专享</h4>
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
	.juan{
		height:1.27rem;
		width:100%;
		background:#27d1d0;
		padding-top:.5rem;
		color:#fff;
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
		background:url(../../../static/img/yhj_tp2@2x.png) no-repeat center;
		background-size:6.99rem 2.4rem;
	}
	.list>div{
		width:4.42rem;
		float:left;
		position:relative;
	}
	.list>div>p{
		width:1.54rem;
		height:1.54rem;
		margin:.3rem 0 0 .6rem;
		color:#fff;
		text-align:center;
		line-height:1.54rem;
		font-size:.68rem;
		font-weight:bold;
		border:.02rem dashed #fff;
	}
	.list>div:nth-child(1){
		width:2.57rem;
		height:2.4rem;
		text-align:center;
		line-height:2.4rem;
		background:url(../../../static/img/jx_tp2@2x.png) no-repeat center;
	}
	.list h2{
		padding-left:.72rem;
		line-height:2.4rem;
		color:#5d8a83;
		font-size:.48rem;
	}
	.list h3{
		transform:rotate(40deg);
		position:absolute;
		top:10px;
		right:10px;
		color:#39bebd;
		font-size:.36rem;
	}
	.list h4{
		position:absolute;
		bottom:20px;
		right:15px;
		color:#7da19c;
		font-size:.26rem;
	}
</style>