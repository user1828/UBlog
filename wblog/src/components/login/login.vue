<template>
	<div class="login">
		<header-com></header-com>
		<center-com></center-com>
		<test-com></test-com>
		<footer-com></footer-com>
	</div>
</template>

<script>
	import header from './header'
	import center from './center'
	import test from './test'
	import footer from './footer'
	export default {
		components:{
			"header-com":header,
			"center-com":center,
			"test-com":test,
			"footer-com":footer
		}
	}
</script>

<style>

</style>
