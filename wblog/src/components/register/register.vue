<template>
	<div class="register">
		<div>
			<p>学校</p>
			<input type="text">
		</div>
		<div>
			<p>专业</p>
			<input type="text">
		</div>
		
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
.register>div{
	margin-left:1.05rem;
}
.register>div>p{
	font-size:.32rem;
	color:#000;
}
.register>div>input{
	border:none;
	outline:none;
	border-bottom:2px solid #8FE4EE;
	width:4.81rem;
	height:.74rem;
}
.register>div:nth-child(1){
	margin-top:3.2rem;	
}
.register>div:nth-child(2){
	margin-top:1.16rem;
}
</style>
