<template>
  <div id="header-com">
    <p>
      <i class="iconfont icon-fanhui fanhui" @click="handleTui()"></i>
      <span>添加好友</span>
      <i></i>
    </p>
  </div>
</template>



<style scoped>
  #header-com{
    width:100%;
    height:1.28rem;
    padding-top:0.4rem;
    background:rgba(39,209,208,1);
  }
  .fanhui{
    font-size: .42rem;
    color:#fff
  }
  #header-com p{
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 0.24rem;
    align-items: center
  }
  #header-com span{
    width:1.58rem;
    height:.38rem;
    line-height: .38rem;
    font-size:.36rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(250,247,249,1);
  }
</style>


<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{
    handleTui(){
      this.$router.back();
  }
  }
}
</script>
