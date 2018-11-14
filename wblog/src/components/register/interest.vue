<template>
	<div class="interest">
		<interestheader-com></interestheader-com>
		<interestcenter-com></interestcenter-com>
	</div>
</template>

<script>
	import interestheader from './interestheader.vue'
	import interestcenter from './interestcenter.vue'
	export default {
		components:{
			"interestheader-com":interestheader,
			"interestcenter-com":interestcenter,
		}
	}
</script>

<style>

</style>
