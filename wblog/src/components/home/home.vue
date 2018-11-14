<template>
	<div id="home">
		<header-com></header-com>
		<banner-com></banner-com>
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
	export default{
		components:{
			"header-com":header,
			"content-com":content,
			"banner-com":banner,
			"footer-com":footer
		},
	
}
</script>

<style>
	
</style>