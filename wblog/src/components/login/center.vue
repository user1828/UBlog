<template>
	<div class="center">
		<div>
			<p>账号</p>
			<input type="text" v-model="nickname" @input="handleChange({val:nickname,id:1})" >
		</div>
		<div>
			<p>密码</p>
			<input type="password" v-model="psd" @input="handleChange({val:psd,id:2})">
		</div>
	</div>	
</template>

<script>
	import verify from "vue-verify-plugin";
	import Vuex from "vuex"
	export default {
		data:function(){
			return {
				nickname:"",
				psd:""
			}
		},
		methods:{
			...Vuex.mapActions({
				handleChange:"hl/handleChange"
			})
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
	font-size:30px;
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
