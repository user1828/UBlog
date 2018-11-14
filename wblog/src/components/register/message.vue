<template>
	<div class="message">
		<mesheader-com></mesheader-com>
		<mescenter-com></mescenter-com>
		<next-com></next-com>
	</div>
</template>

<script>
	import mesheader from './mesheader.vue'
	import mescenter from './mescenter.vue'
	import next from './mesnext.vue'
	export default {
		components:{
			"mesheader-com":mesheader,
			"mescenter-com":mescenter,
			"next-com":next,
		},
		
	}
</script>

<style>

</style>
