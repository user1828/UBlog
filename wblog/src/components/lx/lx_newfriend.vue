<template>
    <div>
        <header-com>
            <span slot="title">新的朋友</span>
            <i class="iconfont icon-jiahao2 jia" slot="addfriend"></i>
        </header-com>
        <section>
            <dl class="newfriend" @click="handleGo()">
                <dt>
                    <img src="../../../static/img/lx_smalltou.gif" alt="">
                </dt>
                <div class="xinxi">
                    <dd>
                        <span  class="name">咔咔</span>
                        <span class="time">07:32</span>
                    </dd>
                    <dd class="msg">嗨，可以交个朋友吗？</dd>
                </div>
                <div class="caozuo">
                    <p class="alow">接受</p>
                    <p class="del">删除</p>
                </div>
            </dl>
        </section>
    </div>
</template>

<script>
import header from "./common/header";
export default {
  components: {
    "header-com": header
  },
  methods:{
      handleGo(){
          this.$router.push("/lx_newsee")
      }
  }
};
</script>

<style>
    .newfriend{
        width: 100%;
        height: 1.54rem;
        overflow: hidden;
        border-bottom: .02rem solid #eee;
    }
    .newfriend div{
        float: left;
    }
    .newfriend dt{
        width: 1.62rem;
        height: 100%;
        float: left;display: flex;
        justify-content: center;
        align-items: center
    }
    .newfriend dt img{
        width:1.12rem;
        height:1.12rem;
        border-radius:50%;
    }
    .newfriend .xinxi{
        height: 100%;
        width: 5.88rem;
        padding: .35rem 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .newfriend .xinxi .name{
        font-size:.3rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        float: left;
    }
    .newfriend .xinxi .time{
        float: right;
        font-size:.21rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:#666;
        margin-right: .29rem;
    }
    .newfriend .xinxi .msg{
        font-size:.28rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:#666;
    }
    .newfriend .caozuo{
        float: left;
        height: 100%;
        width: 3.16rem;
        background: #eee;
        font-size:.32rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 1.54rem;
    }
    .newfriend .caozuo .alow{
        background: #C8C7CD;
        height: 100%;
        width: 1.58rem;
        float: left;
    }
    .newfriend .caozuo .del{
        background: #FF3A31;
        height: 100%;
        width: 1.58rem;
        float: left;
    }
</style>
