<template>
	<div class="register">
		<div>
			<p>学校</p>
			<input type="text" v-model="inputSchool" v-verify.grow1="inputSchool">
			<label v-verified="verifyError.inputSchool"></label>
		</div>
		<div>
			<p>专业</p>
			<input type="text" v-model="inputStudent" v-verify.grow1="inputStudent">
			<label v-verified="verifyError.inputStudent"></label>
		</div>
		<div class="next">
			<button @click="handleGo(),handleAdd({sc:inputSchool,st:inputStudent})">下一步</button>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import axios from "axios"
	import verify from "vue-verify-plugin";

	export default {
		computed: {
			...Vuex.mapState({
				school_name: state => state.inputSchool,
				major_name: state => state.inputStudent
			}),
			verifyError:function(){
				return this.$verify.$errors;
			}
		},
		methods: {
			handleGo(){
				if(this.$verify.check()){
					this.$router.push("/message")
				}
			},
			...Vuex.mapActions({
				handleAdd: "hl/handleAdd"
			}),
		},
		data:function(){
			return {
				inputSchool:"",
				inputStudent:""
			}
		},
		verify:{
			inputSchool:{
				test:/^[\u4e00-\u9fa5]{0,}$/,
				message:"请输入正确名称"
			},
			inputStudent:{
				test:/^[\u4e00-\u9fa5]{0,}$/,
				message:"请输入正确名称"
			}
		},
	}
</script>

<style>
	.register>div {
		margin-left: 1.05rem;
	}
	.register>div>label{
		display:block;
	}
	.register>div>p {
		font-size: .32rem;
		color: #000;
	}

	.register>div>input {
		border: none;
		outline: none;
		border-bottom: 2px solid #8FE4EE;
		width: 4.81rem;
		height: .74rem;
	}

	.register>div:nth-child(1) {
		margin-top: 3.2rem;
	}

	.register>div:nth-child(2) {
		margin-top: 1.16rem;
	}

	.next>button {
		width: 5.68rem;
		height: .82rem;
		background: #27d1d0;
		outline: none;
		border: none;
		border-radius: .41rem;
		position: fixed;
		bottom: 1.01rem;
		left: .95rem;
		font-size: .32rem;
		color: #fff;
	}
</style>
