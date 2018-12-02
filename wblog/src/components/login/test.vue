<template>
    <div class="test">
			<div>
				<p>滑动按钮验证登录</p>
			</div>
			<transition>
				<div class="btn" @click="handleSlide">>>></div>
			</transition>
		</div>
</template>

<script>
    export default {
		methods:{
			handleSlide(){
				
			}
		}
    }
</script>

<style scoped>
.test>div:nth-child(1){
	position:fixed;
	top:1.3rem;
	width:5.66rem;
	height:.65rem;
	background:#ccc;
	position:fixed;
	bottom:4.55rem;
	left:.91rem;
	border-radius:.1rem;
}
.test>div:nth-child(1)>p{
	text-align:center;
	line-height:.65rem;
	font-size:.24rem;
}
.test>.btn{
	position:fixed;
	bottom:4.53rem;
	left:.95rem;
	width:.8rem;
	height:.65rem;
	background:#27d1d0;
	color:#fff;
	text-align:center;
	line-height:.65rem;
}
</style>