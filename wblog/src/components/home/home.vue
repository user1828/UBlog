<template>
	<div id="home">
		<div class="ddd">
			<header-com></header-com>
			<banner-com></banner-com>
			<navs-com></navs-com>
			<content-com></content-com>
		</div>
		
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
	import Vuex from "vuex"
	export default{
		components:{
			"header-com":header,
			"content-com":content,
			"banner-com":banner,
			"footer-com":footer,
			"navs-com":navs
		},
		created(){
			this.tongyi()
		},
		methods:{
			...Vuex.mapActions({
				tongyi:"lx/tongyi"
			})
		}
	}
</script>

<style>
	.ddd{
		margin-bottom:1.5rem;
	}
</style>