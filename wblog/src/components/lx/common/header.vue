<template>
  <div id="header-com">
    <p>
      <i class="iconfont icon-fanhui fanhui" @click="handleTui()"></i>
      <slot name="title"></slot>
      <slot name="addfriend"></slot>
    </p>
   
  </div>
  
</template>



<style scoped>
  #header-com{
    width:100%;
    height:1.28rem;
    padding-top:0.4rem;
    background:rgba(39,209,208,1);
    text-align: center
  }
  .fanhui{
    font-size: .42rem;
    color:#fff;
    float: left;
  }
  .jia{
    font-size: .42rem;
    color:#fff;
    float: right;
  }
  #header-com p{
    height: 100%;
    padding:0  0.24rem;
    line-height: 0.88rem
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
