<template>
    <div class="chatHeader">
        <div class="chatheader_l">
            <!-- //左箭头返回按钮 -->
            <img src="../../../static/icon/-tong-icon_back@2x.png" @click="handleGoback()">
        </div>
      <div class="chatheader_c">
        <!-- //通讯录 消息 对话框 -->
        <p>{{title}}</p>
      </div>
      <div class="chatheader_r">
          <!-- //加号按钮 -->
          <img src="../../../static/icon/-tong-icon_add@2x.png">
      </div>
    </div>
</template>

<script>
export default {
  name: "chatHeader",
  data(){
    return{
      title:''
    }
    // this.$route.params.name
  },
  created() {
    console.log(this.$route.query.name);
    this.title = this.$route.query.name;
  },
  methods:{
    handleGoback(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.chatHeader {
  z-index:10; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.88rem;
  background: #27d1d0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.24rem;
}
.chatHeader .chatheader_l img {
  width: 0.22rem;
  height: 0.44rem;
}
.chatHeader .chatheader_r img {
  width: 0.44rem;
  height: 0.44rem;
}
.chatheader_c{
  color: #fff;
  font-size: 22px;
}
</style>
