<template>
    <div>
        <header-com></header-com>
        <section id="search-com">
            <dl class="people" @click="handleGo()">
                <dt>
                    <img src="" alt="">
                </dt>
                <div>
                    <dd class="name">咔咔</dd>
                    <dd class="school">北京大学 经济学
                        <i class="iconfont icon-youjiantou3"></i>
                    </dd>
                    <dd class="tab">考研党 旅行 音乐</dd>
                </div>
            </dl>
        </section>
    </div>
</template>

<script>
import header from './common/header';
export default {
    components:{
        "header-com":header,
    },
    methods:{
        handleGo(){
            this.$router.push("/lx_see");
        }
    }
}
</script>

<style>
    #search-com .people{
        width: 100%;
        height: 1.97rem;
        border-bottom: .02rem solid #eee;
    }
    .people dt{
        width: 1.62rem;
        height: 100%;
        float: left;
        text-align: center;
        line-height: center;
    }
    .people dt img{
        width:1.12rem;
        height:1.12rem;
        border-radius:50%;
    }
    .people div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: .35rem 0;
    }
    .people .name{
        font-size:.3rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
    .people .school i{
       color: #27D1D0;
       font-size: .3rem;
       float: right;
    }
    .people .school{
        font-size:.26rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        padding-right: .26rem;
    }
    .people .tab{
        font-size:.26rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(83,212,211,1);
    }
</style>
