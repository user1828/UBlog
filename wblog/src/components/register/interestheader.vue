<template>
	<div class="header">
		<i class="iconfont icon-fanhui" @click="handleBack()"></i>	
		<p>兴趣标签</p>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			handleBack(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
.header{
	background:#27d1d0;
	width:100%;
	height:1.28rem;
	display:flex;
}
.header>i{
	color:#fff;
	padding-left:.24rem;
	padding-top:.68rem;
}
.header>p{
	width:100%;
	font-size:.36rem;
	color:#fff;
	padding-left:2.9rem;
	padding-top:.68rem;
}
</style>
