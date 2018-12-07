<template>
  <div class="release">
    <releaseHeader-com>
       <p slot="title">记录中</p>
    </releaseHeader-com>
    
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
    <!-- 底部版块 -->
    <div class="btn_box">
      <p @click="handleBiaoQian()">
        <i class="iconfont icon-biaoqian3"></i>
        <span>添加标签</span>
      </p>
      <!-- 显示权限隐藏显示模块 -->
      <p @click="handleTab()">
        <span>权限</span>
        <i class="iconfont icon-shangjiantou3"></i>
      </p>
      <div class="visible_tab" v-show="tabShow">

        <p v-for="(item,index) in tablist" @click="handleEnter(index)" 
        :class="index == btnShoeindex ? 'tab_p_color': ' '"
        >
          <i :class="ifon"></i>
          <span>{{item.info}}</span>
        </p>
      </div>

      <!-- 发表按钮 -->
      <div class="publish_btn" @click="handleGo()">发表</div>
    </div>
    <!-- 底部版块结束 -->

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
  font-size:30px;
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
  height:5rem;
  width:100%;
  padding:0.4rem .34rem 0 .34rem;
  display: flex;
  justify-content: space-between;
  background: #FAF7F9;
  position: relative;
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
.btn_box .visible_tab{
  height:1.8rem;
  width:2.1rem;
  background: #666666;
  position: absolute;
  right:.24rem;
  top:-1.5rem;
  border-radius: .12rem;
}
.btn_box .visible_tab > p{
  color:#ccc;
  padding-top:.37rem;
  padding-left:.2rem;
  
}
.btn_box .visible_tab > p > i {
  height:.29rem;
  width:.29rem;
  border-radius:50%;
  border:1px solid #ccc;
  line-height:.29rem;
  font-size:.25rem;
}
.btn_box .visible_tab > p > span{
  font-size:.26rem;
} 
.btn_box .visible_tab > .tab_p_color > i{
  border-color:#33CCCC;
  background:#33CCCC;
}
.btn_box .visible_tab > .tab_p_color > span{
  color: #33CCCC;
}
.btn_box .publish_btn{
  height:.8rem;
  width:5rem;
  background:#33CCCC;
  border-radius: .4rem;
  text-align: center;
  line-height: .8rem;
  font-size: .3rem;
  color:#fff;
  position: absolute;
  left:1.25rem;
  bottom:0;
}

</style>

<script>
import BScroll from "better-scroll";
import releaseHeader from "./common/header";
import Vuex from "vuex";
export default {
  data(){
    return {
      btnHide:"visible_tab",
      btnShoeindex:null,
      ifon : "iconfont icon-duihao",
      tabShow : false,
    }
  },
  computed:{
    ...Vuex.mapState({
      tablist:state=>state.lst.tablist,
      name:state=>state.lst.name
    })
  },
  created(){
    
  },
  methods:{
    // 显示隐藏
    handleTab(){
      if(this.tabShow){
        this.tabShow = false;
      }else{
        this.tabShow = true
      }
    },
    // 选中与被选中
    // ...Vuex.mapActions({
    //   handleEnter:"lst/handleEnter"
    // })
    handleEnter(index){
      this.btnShoeindex = index
    },
    handleGo(){
     this.$router.push({name :'home'})
    },
    // 跳转到标签页
    handleBiaoQian(){
      this.$router.push("/lx_addtab")
    }
  },
  components:{
    "releaseHeader-com":releaseHeader
  },
  
}
</script>

