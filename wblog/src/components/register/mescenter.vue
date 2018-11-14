<template>
	<div class="register">
		<div>
			<p>邮箱账号</p>
			<input type="text">
		</div>
		<div>
			<p>密码</p>
			<input type="text">
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
			<input type="text">
		</div>
		<div>
			<p>性别</p>
			<div class="btn">
				<div>
					<i class="iconfont icon-nv1"></i>
					<input type="radio" name="sex" value="女">
				</div>
				<div>
					<i class="iconfont icon-nan"></i>
					<input type="radio" name="sex" value="男">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.register>div{
	margin-left:1.05rem;
	margin-top:.48rem;
	display:flex;
	flex-direction: column;
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
.register>div:nth-child(3) input{
	width:2.24rem;
	border:none;
	outline:none;
	border-bottom:2px solid #8FE4EE;
	height:.74rem;
}
.register>div:nth-child(3) button{
	outline:none;
	border:1px solid #d1d1d1;;
	background:#27d1d0;
	width:1.75rem;
	height:.6rem;
	border-radius:.1rem;
	margin-left:1.2rem;
}
.register>div:nth-child(5)>.btn{
	display:flex;
	justify-content: space-around;
}
.register>div:nth-child(5)>.btn>div{
	flex-direction: column;
	display:flex;
}
.register>div:nth-child(5)>.btn>div>i{
	padding-top:.4rem;
	font-size:.6rem;
	margin-right:1.05rem;
}
.register>div:nth-child(5)>.btn>div:nth-child(1)>i{
	color:pink;
}
.register>div:nth-child(5)>.btn>div:nth-child(2)>i{
	color:#67b5f7;
}
</style>
