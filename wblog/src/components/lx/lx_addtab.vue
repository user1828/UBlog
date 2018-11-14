<template>
    <div>
        <header-com></header-com>
        <section>
            <h3>
                <i class="iconfont icon-icon--"></i>
                <span>选择标签</span>
            </h3>
            <div class="tabdet">
                <div class="tab-com">
                    <p>
                        <i class="iconfont icon-xiaoyuan-"></i>
                    </p>
                    <div>考研党</div>
                </div>
                <div class="tab-com">
                    <p>
                        <i class="iconfont icon-prada_beibao"></i>
                    </p>
                    <div>旅行</div>
                </div>
                <div class="tab-com tabclick"  @click="handleGo()">
                    <p>
                        <i class="iconfont icon-youxi2"></i>
                    </p>
                    <div>游戏</div>
                </div>
                <div class="tab-com">
                    <p>
                        <i class="iconfont icon-weibiaoti-1"></i>
                    </p>
                    <div>健身</div>
                </div>
                <div class="tab-com">
                    <p>
                        <i class="iconfont icon-yinle1"></i>
                    </p>
                    <div>音乐</div>
                </div>
                <div class="tab-com">
                    <p>
                        <i class="iconfont icon-cet
"></i>
                    </p>
                    <div>四六级</div>
                </div>
                <div class="tab-com">
                    <p>
                        <i class="iconfont icon-dianying1"></i>
                    </p>
                    <div>电影</div>
                </div>
                <div class="tab-com">
                    <p>
                        <i class="iconfont icon-zhaoxiangji"></i>
                    </p>
                    <div>摄影</div>
                </div>
            </div>
        </section>
        <b_button></b_button>
    </div>
</template>


<style scoped>
    section{
        padding-top: .58rem;
    }
    section h3{
        margin-bottom: .43rem;
        font-size: .34rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
    section h3 i{
        color: #27D1D0;
        font-size: .4rem;
        margin:0 .31rem 0.78rem ;
    }
    .tabdet{
        display: flex;
        justify-content: space-between;
        padding:0 .76rem;
        flex-wrap: wrap;
    }
    .tabdet .tab-com{
        width:2.8rem;
        height:1.32rem;
        background:rgba(255,255,255,1);
        box-shadow:0px .05px .1px 0px rgba(204,204,204,0.5);
        border-radius:.12rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: .8rem;
        text-align: center;
    }
    .tabdet .tab-com p{
        width: 1.38rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center
    }
    .tabdet .tab-com i{
        color: #27D1D0;
        font-size:.8rem;  
    }
    .tabdet .tab-com div{
        width: 1.38rem;
        line-height: 1.32rem;
        font-size:.34rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        text-align: left;
    }
    .tabdet .tabclick{
        background: #27D1D0;
        color: #fff;
    }
    .tabdet .tabclick div{
       color: #fff;
    }
    .tabdet .tabclick i{
       color: #fff;
    }
</style>


<script>
import header from './common/header';
import b_button from './common/b_button';

export default {
    components:{
        "header-com":header,
        "b_button":b_button
    },
    methods:{
        handleGo(){
            this.$router.push("/lx_search");
            console.log("111")
        }
    }
}
</script>