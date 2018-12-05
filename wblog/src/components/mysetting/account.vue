<template>
	<div class="account">
		<releaseHeader-com></releaseHeader-com>
		<ul>
			<li>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import releaseHeader from "./common/header";
	export default{
		data(){
			return{
				list:[
					{
						
					}
				]
			}
		},
		mounted(){
			
		},
		components:{
			"releaseHeader-com":releaseHeader

		}
	}
</script>

<style scoped>
	.account{
		width: 100%;
		height: 13.34rem;
		background: #fff;
	}
</style>