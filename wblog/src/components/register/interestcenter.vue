<template>
	<div class="interest">
		<div class="top">
			<div v-for="(item,index) in navs" @click="handleChange(index)" :class="item.status?'active':''">
				<img :src="item.img">
				<p>{{item.title}}</p>
			</div>
			<div>
				<img src="../../../static/img/矢量智能对象1@2x.png">
			</div>
		</div>
		<div class="next">
			<button @click="handleTo(),handleGo()">完成注册</button>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	export default {
		data(){
			return{
				navs:[
					{
						img:"../../../static/img/健身.png",
						title:"健身",
						status:false
					},
					{
						img:"../../../static/img/dianying@2x.png",
						title:"电影",
						status:false
					},
					{
						img:"../../../static/img/CET@2x.png",
						title:"四六级",
						status:false
					},
					{
						img:"../../../static/img/travel@2x.png",
						title:"旅行",
						status:false
					},
					{
						img:"../../../static/img/game@2x.png",
						title:"游戏",
						status:false
					},
					{
						img:"../../../static/img/摄影.png",
						title:"摄影",
						status:false
					},
					{
						img:"../../../static/img/read@2x.png",
						title:"阅读",
						status:false
					},
					{
						img:"../../../static/img/music@2x.png",
						title:"音乐",
						status:false
					},
					
				]
			}
		},
		methods:{
			handleGo(){
				this.$router.push("/login")
			},
			handleChange(index){
				this.navs[index].status=!this.navs[index].status;
				
			},
			...Vuex.mapActions({
				handleTo:"hl/handleTo"
			})
		}
	}
</script>

<style secoped>
.interset{
	width:100%;
	height:8.6rem;
	opacity:0.5rem;
	background:#ccc;
}
.top{
	margin:1.36rem .36rem 0;
	width:6.8rem;
	height:7rem;
	background:url(../../../static/img/矢量智能对象@2x.png) no-repeat 0;
	background-size:6.8rem 7rem;
	position:relative;
}
.top>div{
	width:1.22rem;
	height:1.22rem;
	border-radius:50%;
}
.top>div:nth-child(1){
	position:absolute;
	top:.1rem;
	left:2.36rem;
	padding-left:.3rem;
	background:url(../../../static/img/yuan1.png)no-repeat center;
}
.top>div:nth-child(2){
	position:absolute;
	top:1.3rem;
	left:.6rem;
	padding-left:.3rem;
	background:url(../../../static/img/yuan1.png)no-repeat center;
}
.top>div:nth-child(3){
	position:absolute;
	top:3.32rem;
	left:.1rem;
	padding-left:.3rem;
	background:url(../../../static/img/yuan1.png)no-repeat center;
}
.top>div:nth-child(4){
	position:absolute;
	top:5.02rem;
	left:1.01rem;
	padding-left:.3rem;
	background:url(../../../static/img/yuan1.png)no-repeat center;
}
.top>div:nth-child(5){
	position:absolute;
	top:5.7rem;
	left:3.27rem;
	padding-left:.3rem;
	background:url(../../../static/img/yuan1.png)no-repeat center;
}
.top>div:nth-child(6){
	position:absolute;
	top:4.42rem;
	left:4.83rem;
	padding-left:.3rem;
	background:url(../../../static/img/yuan1.png)no-repeat center;
}
.top>div:nth-child(7){
	position:absolute;
	top:2.64rem;
	left:5.51rem;
	padding-left:.3rem;
	background:url(../../../static/img/yuan1.png)no-repeat center;
}
.top>div:nth-child(8){
	position:absolute;
	top:.76rem;
	left:4.43rem;
	padding-left:.3rem;
	background:url(../../../static/img/yuan1.png)no-repeat center;
}
.top>div:nth-child(9){
	position:absolute;
	top:2.94rem;
	left:2.62rem;
	padding-left:.3rem;
}
.top>div>img{
	width:.76rem;
	height:.78rem;
}
.top>div>p{
	color:#fff;
}
.next>button{
	width:5.68rem;
	height:.82rem;
	background:#27d1d0;
	outline:none;
	border:none;
	border-radius:.41rem;
	position:fixed;
	bottom:1.01rem;
	left:.95rem;
	font-size:.32rem;
	color:#fff;
}
.top>.active{
	background:url(../../../static/img/yuan2.png)no-repeat center!important;
}
</style>
