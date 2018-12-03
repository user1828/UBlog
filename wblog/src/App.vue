<template>
  <div id="app"> 
  <data-com></data-com>
    <router-view/>
  </div> 

</template>

<script>
import data from "./components/data"
export default{
	components:{
		"data-com":data
	}
}
</script>

<style>
@import "css/lib/weui.min.css";
@import "css/lib/animate.css";
@import "css/lib/iconfont.css";
</style>
