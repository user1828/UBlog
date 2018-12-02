<template>
	<div id="home">
		<registerheader-com></registerheader-com>
		<register-com></register-com>
		<!-- <next-com></next-com> -->
	</div>
</template>

<script>
	import registerheader from "./registerheader.vue";
	import register from "./register.vue";
	// import next from "./registernext.vue";
	export default {
		components:{
			"registerheader-com":registerheader,
			"register-com":register,
			// "next-com":next
		}
	}
</script>

<style>

</style>
