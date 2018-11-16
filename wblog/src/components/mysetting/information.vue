<template>
	<div class="information">
		<releaseHeader-com></releaseHeader-com>
		<ul>
			<li v-for="(item,index) in list">
				<p>{{item.name}}</p>
				<input type="text" :placeholder="list[index].input">
				<i class="iconfont icon-youjiantou"></i>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	import releaseHeader from "./common/header";
	export default {
		data() {
			return {
				list:[
					{
						name:"昵称",
						input:"卡卡",
						
					},
					{
						name:"签名",
						input:"hello world",
					},
					{
						name:"性别",
						input:"男",
					},
					{
						name:"学校",
						input:"洛阳理工学院",
					},
					{
						name:"专业",
						input:"机电一体化",
					},
					{
						name:"标签",
						input:"科技  生活",
					},
				]
			}
		},
		mounted(){
			
		},
		components:{
			"releaseHeader-com":releaseHeader
		}
	}
</script>
<style scoped>
	.information{
		width: 100%;
		height:13.34rem;
		background: #fff;
	}
	.information>ul{
		padding: 0 .24rem;
	}
	.information>ul>li{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 7.02rem;
		height: 1.35rem;
		border-bottom: 2px solid #EEEEEE;
	}
	.information>ul>li>p{
		display:inline-block;
		font-size: .36rem;
		color:#333333;
		font-style: PingFangSC-Regular;
		font-weight: 600;
	}
	.information>ul>li>input{
		width: 5rem;
		height: 1.31rem;
		border:none;
		font-size: .3rem;
		color:#666666;
		font-style: PingFangSC-Regular;
		outline: none;
	}
</style>
