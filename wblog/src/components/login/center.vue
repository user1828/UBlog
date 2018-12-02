<template>
	<div class="center">
		<div>
			<p>账号</p>
			<input type="text" v-verify.grow1="nickname" v-model="nickname">
			<label v-verified="verifyError.nickname"></label>
		</div>
		<div>
			<p>密码</p>
			<input type="text" v-verify.grow1="psd" v-model="psd">
			<label v-verified="verifyError.psd"></label>
		</div>
	<!-- 	<div class="footer">
			<button @click="handleGo()">登录</button>
			<button @click="handleTo()">注册</button>
		</div> -->
	</div>	
</template>

<script>
	import verify from "vue-verify-plugin";
	export default {
		methods:{
			handleGo(){
				
				if(this.$verify.check()){
					this.$router.push("./home")
				}
			},
			handleTo(){
				this.$router.push("./registerhome")
			}
		},
		data:function(){
			return {
				nickname:"",
				psd:""
			}
		},
		verify:{
			nickname:{
				test:/^1[34578]\d{9}$/,
				message:"请输入正确格式"
			},
			// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
			psd:{
				test:/^[a-zA-Z]\w{5,17}$/,
				message:"请输入正确格式"
			},
		},
		computed:{
			verifyError:function(){
				return this.$verify.$errors;
			}
		}
	}
</script>

<style>
.center>div{
	margin-left:1.02rem;
}
.center>div>label{
	display:block;
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
/* .footer{
	margin-top:3.2rem;
	display:flex;
	flex-direction: column;
}
.footer>button{
	outline:none;
	border:none;
	width:5.7rem;
	height:.82rem;
	margin-bottom:.5rem;
	font-size:.3rem;
	color:#fff;
	border-radius:5px;
}
.footer>button:nth-child(1){
	background:#27d1d0;
}
.footer>button:nth-child(2){
	background:#0b8483;
} */
</style>
