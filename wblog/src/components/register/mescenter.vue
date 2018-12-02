<template>
	<div class="register">
		<div>
			<p>手机号码</p>
			<input type="text" v-model="inputPhone" v-verify.grow1="inputPhone">
			<!-- <label v-verified="verifyError.inputPhone"></label> -->
		</div>
		<div>
			<label v-verified="verifyError.inputPhone"></label>
		</div>
		<div>
			<p>密码</p>
			<input type="password" v-model="inputPsd" v-verify.grow1="inputPsd">
			<!-- <label v-verified="verifyError.inputPsd"></label> -->
		</div>
		<div>
			<label v-verified="verifyError.inputPsd"></label>
		</div>
		<div>
			<p>验证码</p>
			<div>
				<input type="text">
				<button>点击获取</button>
			</div>
		</div>
		<div>
			<p>昵称</p>
			<input type="text" v-model="inputUser" v-verify.grow1="inputUser">
			<!-- <label v-verified="verifyError.inputUser"></label> -->
		</div>
		<div>
			<label v-verified="verifyError.inputUser"></label>
		</div>
		<div>
			<p>性别</p>
			<div class="btn">
				<div>
					<i class="iconfont icon-nv1"></i>
					<!-- <input type="radio" name="sex" value="女" v-model="inputGender"> -->
				</div>
				<div>
					<i class="iconfont icon-nan"></i>
					<!-- <input type="radio" name="sex" value="男" v-model="inputGender"> -->
				</div>
			</div>
		</div>
		<div class="next">
			<button @click="handleGo(),handleAddd({phone:inputPhone,psd:inputPsd,user:inputUser,gender:inputGender})">下一步</button>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import verify from "vue-verify-plugin";
	export default {
		computed:{
			...Vuex.mapState({
				phone:state=>state.inputPhone,
				password:state=>state.inputPsd,
				nickname:state=>state.inputUser,
				gender:state=>state.inputGender
			}),
			verifyError:function(){
				return this.$verify.$errors;
			}
		},
		methods:{
			handleGo(){
				if(this.$verify.check()){
					this.$router.push("/interest")
				}
			},
			...Vuex.mapActions({
				handleAddd:"hl/handleAddd"
			})
		},
		data:function(){
			return {
				inputPhone:"",
				inputPsd:"",
				inputUser:"",
				inputGender:""
			}
		},
		verify:{
			inputPhone:{
				test:/^1[34578]\d{9}$/,
				message:"请输入正确格式"
			},
			// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
			inputPsd:{
				test:/^[a-zA-Z]\w{5,17}$/,
				message:"请输入正确格式"
			},
			//中文、英文、数字包括下划线
			inputUser:{
				test:/^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
				message:"请输入正确格式"
			}
		}
	}
</script>

<style scoped>
.register>div{
	margin-left:1.05rem;
	margin-top:.48rem;
	display:flex;
	flex-direction: column;
}
.register>div:nth-child(2),.register>div:nth-child(4),.register>div:nth-child(7){
	margin:0;
	padding-left:1rem;
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
	margin-top:1.38rem;	
}
.register>div:nth-child(2){
	width:100%;
	height:.1rem;
}
.register>div:nth-child(5) input{
	width:2.24rem;
	border:none;
	outline:none;
	border-bottom:2px solid #8FE4EE;
	height:.74rem;
}
.register>div:nth-child(5) button{
	outline:none;
	border:1px solid #d1d1d1;;
	background:#27d1d0;
	width:1.75rem;
	height:.6rem;
	border-radius:.1rem;
	margin-left:1.2rem;
}
.register>div:nth-child(8)>.btn{
	display:flex;
	justify-content: space-around;
}
.register>div:nth-child(8)>.btn>div{
	flex-direction: column;
	display:flex;
}
.register>div:nth-child(8)>.btn>div>i{
	padding-top:.4rem;
	font-size:.6rem;
	margin-right:1.05rem;
}
.register>div:nth-child(8)>.btn>div:nth-child(1)>i{
	color:pink;
}
.register>div:nth-child(8)>.btn>div:nth-child(2)>i{
	color:#67b5f7;
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

</style>
