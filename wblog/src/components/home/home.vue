<template>
	<div id="home">
		<header-com></header-com>
		<banner-com></banner-com>
		<navs-com></navs-com>
		<content-com></content-com>
		<footer-com></footer-com>
		<router-view></router-view>
	</div>
	
</template>

<script>
	import header from "./header"
	import banner from "./banner"
	import content from "./content"
	import footer from "../common/footer"
	import navs from "./navs"
	export default{
		components:{
			"header-com":header,
			"content-com":content,
			"banner-com":banner,
			"footer-com":footer,
			"navs-com":navs
		}
	}
</script>

<style>
	
</style>