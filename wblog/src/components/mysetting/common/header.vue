<template>
  <div>
    <div class="navigation"></div>
    <!-- 头部 -->
    <header>
      <i class="iconfont icon-zuojiantou" @click="handleBack()"></i>
      <slot name="title"></slot>
      <p></p>
    </header>
  </div>
</template>

<script>
export default {
  data(){
    return {
      headerTitle : "记录中"
    }
  },
  methods:{
    handleBack(){
      this.$router.back()
    }
  }

}
</script>


<style scoped>
.navigation{
  height:.44rem;
  width:100%;
  background-color:#33CCCC;
}
div>header{
  height:.84rem;
  width:100%;
  background-color:#33CCCC;
  display: flex;
  align-items:center;
  justify-content:space-between;
  /* margin-top:.44rem; */
}

div>header > i {
  font-size:.6rem;
  color:rgba(255,255,255,1);
}
div>header > p {
  font-size:0.34rem;
  font-family:"PingFangSC-Regular";
  font-weight:400;
  color:rgba(255,255,255,1);
}
header>.kong{
	height:.6rem;
	width:.6rem;
}
</style>

