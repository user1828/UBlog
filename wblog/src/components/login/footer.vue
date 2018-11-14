<template>
	<div class="footer">
		<button>登录</button>
		<button>注册</button>
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
.footer{
	margin-top:.1rem;
	display:flex;
	flex-direction: column;
	
}
.footer>button{
	outline:none;
	border:none;
	width:5.7rem;
	height:.82rem;
	margin-left:.95rem;
	margin-bottom:.68rem;
	font-size:.3rem;
	color:#fff;
	border-radius:5px;
}
.footer>button:nth-child(1){
	background:#27d1d0;
}
.footer>button:nth-child(2){
	background:#0b8483;
}
</style>
