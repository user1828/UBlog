<template>
	<div class="center">
		<div>
			<p>账号</p>
			<input type="text">
		</div>
		<div>
			<p>密码</p>
			<input type="text">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.center>div{
	margin-left:1.02rem;
}
.center>div:nth-child(1){
	margin-top:2.2rem;
}
.center>div>p{
	font-size:.32rem;
	color:#000000;
}
.center>div>input{
	outline:none;
	border:none;
	border-bottom:1px solid #27d1d0;
	height:.68rem;
	width:4.8rem;
}
.center>div:nth-child(2)>p{
	margin-top:1.28rem;
}
</style>
