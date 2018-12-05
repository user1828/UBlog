<template>
	<div class="footer">
		<button @click="handleGo(),handleLogin()">登录</button>
		<button @click="handleTo()">注册</button>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		methods:{
			handleGo(){
				this.$router.push("./home")
			},
			handleTo(){
				this.$router.push("./registerhome")
			},
			...Vuex.mapActions({
				handleLogin:"hl/handleLogin"
			})
		}
	}
</script>
<style>
.footer{
	margin-top:.1rem;
	position:fixed;
	bottom:1.01rem;
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
