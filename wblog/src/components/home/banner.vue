<template>
	<div class="banner">
		<img src="../../../static/img/banner.png" @click="handleActions()">
	</div>
</template>

<script>
	export default{
		methods:{
			handleActions(){
				this.$router.push("/actions")
			}
		}
	}
</script>

<style>
	.banner>img{
		width:7rem;
		height:3rem;
		position:absolute;
		left:.24rem;
		margin-top:-1.7rem;
	}
</style>