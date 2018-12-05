<template>
    <div class="exercise">
        <div class="header">
            <div>
               <router-link to="home">
                    <i class="iconfont icon-zuojiantou"></i>
                </router-link>
            </div>
            <div>
                <span>运动</span>
            </div>
            <div></div>
        </div>
        <!-- 中心内容 -->
        <div class="center" v-for="(item,index) in biaoqianlist.data">
            <div>
                 <img :src="item.activity.cate_add">
            </div>
            <div>
                <div>
                <span>活动主题:<span></span>{{item.activity.theme}}</span>
                </div>
                <div>
                    <h3>{{item.activity.place}}</h3>
                </div>
            </div>
            <div>
                <p> 时间:<span>2018年8月18日</span></p>
                <p>费用:<span>{{item.activity.fee}}元</span></p></p>
            </div>
            <div>
                <h4>{{item.activity.title}}</h4>
                <p>
                    {{item.activity.content}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
   computed:{
       ...Vuex.mapState({
           biaoqianlist:state=>state.wcy.biaoqianlist,
       })
   },
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: 1.28rem;
        background: #27D1D0;
        display: flex;
        justify-content: space-between;
        color: #fff;
    }
    .header>div:nth-child(1){
        margin-top: .62rem;
      
       
    }
    .header>div:nth-child(1) a i{
        font-size: .46rem;
        color: #fff;
    }
    .header>div:nth-child(2){
        margin-top: .58rem; 
    }
     .header>div:nth-child(2) span{
         font-size: .46rem;
     }
     .center>div:nth-child(1){
         width: 100%;
         height: 4.46rem;
         
     }
        .center>div:nth-child(1) img{
            width: 100%;
            height: 100%;
            display: block;
            padding: .3rem .25rem;
        }
        .center>div:nth-child(2){
            display: flex ;
            justify-content: space-between;
            line-height: .36rem;
        }
        .center>div:nth-child(2)>div:nth-child(1){
            display: flex;
        }
        .center>div:nth-child(2)>div:nth-child(1) span{
            padding-left: 0.2rem;
            font-size: .34rem;
            color:#19191A;
            font-family: PingFangSC-Regular;
        }
        .center>div:nth-child(2)>div:nth-child(2) h3{
            padding-right: 0.2rem;
            font-size: .36rem;
            font-weight: 600;
            line-height: .36rem;
        }
        .center>div:nth-child(3){
           
            margin-left: .3rem
        }
        .center>div:nth-child(3)>p{
            font-size:.24rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            padding-top: .2rem;
        }
         .center>div:nth-child(3)>span{
             margin-left: .1rem;
         }
         .center>div:nth-child(4){
                margin-top: .43rem;
                margin-left: .21rem;
                margin-right: .21rem;
         }
         .center>div:nth-child(4) h4{
            font-size:.3rem;
            font-family:PingFangSC-Regular;
            font-weight:600;
            color: #19191A;
            margin-bottom: .19rem;
         }
         .center>div:nth-child(4) p{
            font-size:.24rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color: #999;
         }
</style>
