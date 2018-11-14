<template>
  <div class="release">
    <releaseHeader-com></releaseHeader-com>
    
    <!-- 分享发布 -->
    <div class="release_share">
      <!-- 文本输入框 -->
      <textarea name="release_content" id="release_content" placeholder="分享新鲜事..." maxlength="100">
      </textarea>
      <!-- 照片选择 -->
      <div class="content-phone">
        <div class="phone-btn">
          <i class="iconfont icon-zhaopian">
          </i>
          <input type="file" accept="image/*">
        </div>
      </div>
    </div>
    <div class="btn_box">
      <p>
        <i class="iconfont icon-biaoqian3"></i>
        <span>添加标签</span>
      </p>
      <p>
        <span>权限</span>
        <i class="iconfont icon-shangjiantou3"></i>
      </p>
    </div>

    
  </div>
</template>

<style scoped>
.release{
  /* background-color:; */
  display:flex;
  flex-direction:column;
}
.release_share{
  height:5.2rem;
  width:100%;
  background-color:#FFFFFF;
}
.release_share>#release_content{
  border:none;
  width:100%;
  height:2.70rem;
  resize:none;
  outline: none;
  padding:0.2rem 0.25rem;
}
.release_share>#release_phone{
  border:none;
}
.conent{
  flex:1;
}
.conent > p{
  height:300px;
  background-color:red;
}
.release_share>.content-phone{
  height:2.3rem;
  width:100%;
  padding:0 0.24rem;
  padding-top:0.26rem;
}
.release_share .content-phone .phone-btn{
  width:2.30rem;
  height:1.82rem;
  background:rgb(0,0,0,1);
  opacity:0.1;
  border-radius:12px;
  text-align: center;
  position: relative;
}
.release_share .content-phone .phone-btn >i{
  font-size:0.62rem;
  opacity:1;
  color:#cff;
  line-height:1.82rem;
}
.release_share .content-phone .phone-btn>input{
  opacity:1;
  position:absolute;
  left:0;
  top:.3rem;
  opacity: 0;
}
.release >.btn_box{
  height:0.62rem;
  width:100%;
  padding:0.4rem .34rem 0 .34rem;
  display: flex;
  justify-content: space-between;
  background: #FAF7F9;
}
.release >.btn_box > p:nth-child(1){
  width:2.1rem;
  height:.62rem;
  border-radius: .31rem;
  background:#E5E5E5;
  line-height:.62rem;
  color:#666666;
  font-size:.26rem;
  text-align: center
}
.release >.btn_box > p:nth-child(2){
  width:1.66rem;
  height:.62rem;
  border-radius: .31rem;
  background:#E5E5E5;
  line-height:.62rem;
  color:#666666;
  font-size:.26rem;
  text-align: center
}
</style>

<script>
import BScroll from "better-scroll";
import releaseHeader from "./common/header"
export default {
  data(){
    return {

    }
  },
  mounted(){

  },
  components:{
    "releaseHeader-com":releaseHeader
  }
}
</script>

