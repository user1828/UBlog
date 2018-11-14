<template>
	<div class="next">
		<button @click="handleGo()">下一步</button>
	</div>
</template>

<script>
	export default {
		methods:{
			handleGo(){
				this.$router.push("/interest")
			}
		}
	}
</script>

<style scoped>
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
</style>
