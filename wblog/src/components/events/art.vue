<template>
    <div class="art">
        <div class="header">
            <div>
                <router-link to="home">
                <i class="iconfont icon-zuojiantou"></i></router-link>
            </div>
            <div>
                <span>文艺</span>
            </div>
            <div></div>
        </div>
        <div class="center" v-for="(item,index) in list">
            <div>
                <img src="../../../static/img/aa.png">
            </div>
            <div>
                <div>
                <span>活动主题:<span>运动无止境</span></span>
                </div>
                <div>
                    <h3>康乐馆</h3>
                </div>
            </div>
            <div>
                <p> 时间:<span>2018年8月18日</span></p>
                <p>费用:<span>78元</span></p></p>
            </div>
            <div>
                <h4>运动的体会</h4>
                <p>
                    我们在青春肆意追求梦想，而梦想不曾走远，只是它爱的是现实。
                    你的情敌很残忍，而在你的青春里，你却只能忍。你会饱受折磨，
                    看着你的爱，渐渐冷冰，但这一切不会结束，只要你活着。为了反
                    抗，我们在青春里不懈的挥洒汗水，偶尔暗自落泪。但要知道，真
                    正属于你的，不曾走远。

                </p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Vuex from "vuex"
export default {
    
        created() {
            this.handleAdd();
            // axios({
            //     method:"delete",
            //     url:"http://localhost:3000/list/3",
                // data:{
                //     name:"兼职",
                //     arr:[
                //         {
                //             imgsrc:"../../../static/img/ccc.png",
                //             activity:"生命永健康",
                //             place:"金辉滑雪场",
                //             time:"2018年8月18日",
                //             cost:"66",
                //         },
                //         {
                //             realize:"人生的感悟",
                //             details:"我想，岁月就像那样，我们眼睁睁的看着自己的往事在面前一点点地单淡去，而我们的前景反而在背后一滴一滴地淡出，我们不知道下一站会在何处落脚，甚至不知道后面的视野会怎么样，只能走一步算一步。原谅捧花的我盛装出席，只为错过你，起到天灾人祸分给我，只为你这香气。",

                //         }
                //     ]
                // }
            // })
        },
        computed:{
            ...Vuex.mapState({
                list:state=>state.list,
            })
            
        },
         methods:{
      ...Vuex.mapActions({
          handleAdd:"events/handleAdd",

      })
         }
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
    .header>div:nth-child(1) i{
        font-size: .46rem;
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
