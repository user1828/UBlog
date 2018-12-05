李想 21:47:27
<template>
  <div>
    <header-com>
      <span slot="title">新的朋友</span>
      <i class="iconfont icon-jiahao2 jia" slot="addfriend"></i>
    </header-com>
    <section>
      <div class="wrapper" ref="wrapper" v-for="(item,index) in list">
        <dl class="newfriend content" @click="handleGo()">
          <dt>
            <img src="../../../static/img/lx_smalltou.gif" alt>
          </dt>
          <div class="xinxi">
            <dd>
              <span class="name">咔咔</span>
              <span class="time">07:32</span>
            </dd>
            <dd class="msg">嗨，可以交个朋友吗？</dd>
          </div>
          <div class="caozuo">
            <p class="alow" @click.stop="handleJieShou()">接受</p>
            <p class="del" @click>删除</p>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>

<script>
import header from "./common/header";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    };
  },
  components: {
    "header-com": header
  },
  methods: {
    handleGo() {
      this.$router.push("/lx_newsee");
    },
    handleJieShou(e) {
      this.$router.push({ path: "/addressList", query: { name: "通讯录" } });
    }
  },
  mounted() {
    let els = document.querySelectorAll(".wrapper");
    for (let i = 0; i < els.length; i++) {
      new BScroll(els[i], {
        scrollX: true,
        bounce: false,
        click: true
      });
    }

    //this.$refs.name   可以获取到当前添加了 ref="name"属性的DOM元素
  }
};
</script>

<style>
section {
  width: 100%;
  overflow: hidden;
}
.newfriend {
  width: 10.66rem;
  height: 1.54rem;
  border-bottom: 0.02rem solid #eee;
}
.newfriend div {
  float: left;
}
.newfriend dt {
  width: 1.62rem;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.newfriend dt img {
  width: 1.12rem;
  height: 1.12rem;
  border-radius: 50%;
}
.newfriend .xinxi {
  height: 100%;
  width: 5.88rem;
  padding: 0.35rem 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  float: left;
}
.newfriend .xinxi .name {
  font-size: 0.3rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  float: left;
}
.newfriend .xinxi .time {
  float: right;
  font-size: 0.21rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #666;
  margin-right: 0.29rem;
}
.newfriend .xinxi .msg {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #666;
}
.newfriend .caozuo {
  float: left;
  height: 100%;
  width: 3.16rem;
  background: #eee;
  font-size: 0.32rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 1.54rem;
}
.newfriend .caozuo .alow {
  background: #c8c7cd;
  height: 100%;
  width: 1.58rem;
  float: left;
}
.newfriend .caozuo .del {
  background: #ff3a31;
  height: 100%;
  width: 1.58rem;
  float: left;
}
</style>
