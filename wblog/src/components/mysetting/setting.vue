<template>
	<div class="setting">
		<releaseHeader-com>
			<p slot="title">设置</p>
		</releaseHeader-com>
			
		<ul>
			<li @click="handleJuan()">
				<i class="iconfont icon-youhuiquan1"></i>
				<p>优惠券</p>
				<i class="iconfont icon-youjiantou"></i>
			</li>
			<li>
				<i class="iconfont icon-dengpao"></i>
				<p>帮助与反馈</p>
				<i class="iconfont icon-youjiantou"></i>
			</li>
			<li @click="handleGeRen()">
				<i class="iconfont icon-xunzhang"></i>
				<p>修改个人信息</p>
				<i class="iconfont icon-youjiantou"></i>
			</li>
			<li @click="handleGo()">
				<i class="iconfont icon-tuichudenglu"></i>
				<p>退出登录</p>
				<i class="iconfont icon-youjiantou"></i>
			</li>
		</ul>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
import releaseHeader from "./common/header";
export default{
	data(){
		return {

		}
	},
	methods:{
		handleforward(){
			this.$router.push("/account")
		},
		handleGo(){
			this.$router.push("/login")
		},
		handleBack(){
			this.$router.back()
		},
		handleJuan(){
			this.$router.push("/coiling");
		},
		handleGeRen(){
			this.$router.push("/information");
		}
	},
	components:{
		"releaseHeader-com":releaseHeader
	}
	
}
	
</script>

<style scoped>
	.setting{
		width: 100%;
		height: 13.34rem;
		background: #fff;
	}
	.setting>ul{
		padding: 0 .24rem;
	}
	.setting>ul>li{
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 7.02rem;
		height: 1.24rem;
		border-bottom: 2px solid #EEEEEE;
	}
	.setting>ul>li>i:first-child{
		font-size: .37rem;
		color: #27D1D0;
	}
	.setting>ul>li>i:last-child{
		font-size: .2rem;
		color:#666666;
	}
	.setting>ul>li>p{
		line-height: 1.22rem;
		display: inline-block;
		position: absolute;
		left: .92rem;
		font-size:.36rem;
		color:#666666;
		font-sty: PingFangSC-Regular;
		
	}
</style>