<template>
     <div>
        <header-com>
            <span slot="title">详细信息</span>
            <i class="iconfont icon-jiahao2 jia" slot="addfriend"></i>
        </header-com>
        <section id="see-com">

            <div class="see-t">
                <div class="peoplebg">
                    <img src="../../../static/img/lx_peoplebg.png">
                </div>
                <div class="smalltou">
                    <img src="http://ceshi.qfjava.cn/group1/M00/00/04/rB8xvlvqtVOAKmbXAAAcjZCHgjY980.jpg">
                </div>
            </div>
            <div class="see-b">
                <div class="name">
                    <i class="iconfont icon-nv2"></i>
                    <span>咔咔</span>
                </div>
                <p class="school kuai">
                    <i class="iconfont icon-My"></i>
                    <b>学校信息：</b>
                    <span>北京大学  经济学</span>
                </p>
                <p class="tab kuai">
                    <i class="iconfont icon-biaoqian4"></i>
                    <b>标签：</b>
                    <span>旅行 音乐</span>
                </p>
                <p class="sign kuai">
                    <i class="iconfont icon-ganxingqu"></i>
                    <b>个性签名：</b>
                    <span>乐观面对每一天</span>
                </p>
                <div class="msg">
                    <p class="liuyan">
                        <i class="iconfont icon-qianbi"></i>
                        <b>你好，我是小仙女。</b>
                    </p>
                    <!-- <p class="res">
                        <div>回复</div> 
                    </p> -->
                </div>
            </div>
        </section>
        <b_button-com>
            <div slot="title" class="btn" @click="handleBtn()">通过验证</div>
        </b_button-com>
     </div>
</template>

<script>
import Header from './common/header';
import b_button from './common/b_button';

export default {
    components:{
        "header-com":Header,
        "b_button-com":b_button
    },
    created(){
        console.log(this.$route.query.id)
    },
    methods:{
        handleBtn(){
            this.$router.push("/home")
        }
    }
}
</script>

<style>
     .see-t{
        position: relative;
    }
    .see-t .peoplebg{
        width: 100%;
        height:4rem;
    }
    .see-t .peoplebg img{
        width:100%;
        height:100%;
    }
    .see-t .smalltou{
        width:.75 rem;
        height:.4 rem;
        width:1.2rem;
        height:1.2rem;
        border-radius:50%;
        overflow: hidden;
        position: absolute;
        top:3.4rem;
        left:3.15rem;
    }
    .see-t .smalltou img{
        width:100%;
        height:100%;
    }


    .see-b{
        padding: 0 .24rem;
    }
    .see-b .name{
       margin-top:.79rem;
       font-size:.33rem;
       text-align: center;
       font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        padding-bottom: .37rem;
        border-bottom: 2px solid #eee;
    }
    .see-b i{
        color: pink;
    }
    .see-b .kuai{
        min-height: .88rem;
        line-height: .38rem;
        padding:.25rem;
        color: #666;
        border-bottom: 2px solid #eee;
    }
    .see-b kuai i{
        font-size: .38rem;
        color: #29D1D0;
    }
    .see-b span{
        padding-right: .15rem;
    }
    .see-b .msg{
        min-height: 1.67rem;
        padding:.69rem 0 0 .25rem;
        color: #666;
        border-bottom: 2px solid #eee;
    }
    .msg p{
        float: left;
    }
</style>
