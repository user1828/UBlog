<template>
  <div class="mypraise">
    <releaseHeader-com>
      <p slot="title">我的</p>
    </releaseHeader-com>
    <!-- 个人资料显示 -->
    <div class="my_info">
      <div class="my_headportrait">
        
      </div>
    </div>
    <!-- 受到的赞 -->
    <div class="receive_praise">

    </div>
  </div>
</template>
<script>
import releaseHeader from "./common/header";
import Vuex from "vuex";
export default {
  data(){
    return {
    }
  },
  components:{
    "releaseHeader-com":releaseHeader,
  }
}
</script>
<style scoped>
  .mypraise{
    display: flex;
    flex-direction:column;
  }
  .my_info{
    height:3.5rem;
    width:100%;
    background:#ccc;
  }
  .receive_praise{
    flex:1;
    background:red;
  }
</style>


