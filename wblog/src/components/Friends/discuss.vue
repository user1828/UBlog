<template>
<div class="ss">
        <div class="discuss">
             <div class="header"> 
                    <div>
                        <router-link to="focus">
                        <i class="iconfont icon-zuojiantou1"></i>
                        </router-link>
                    </div>
                    <div>评论</div>
                    <div>
                        <router-link to="">
                        <i class="iconfont icon-shezhi3"></i>
                        </router-link>
                    </div>
             </div>
             <div class="centen">
                 <div>
                     <div class="tou">
                         <img src="../../../static/img/tou.png"> 
                     </div>
                     <div>
                         <span>幂幂</span>
                         <p>8小时前</p>
                     </div>
                 </div>
                 <div>
                     <div>
                         <p>你长得真好看和我一样好看</p>
                     </div>
                     <div>
                         <span>图怕撒超</span>
                        <p>周末好无聊呀</p>
                     </div>
                 </div>
             </div>
        </div>
       </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },

}
</script>
<style>
    .discuss .header{
        justify-content: space-between;
        height: 1.26rem;
        background: #27d1d0;
        display:flex; 
        padding-top: .55rem;
        color: #fff;
    }
    .discuss div:nth-child(1) div:nth-child(1) i{
        margin-left: 0.2rem;
        font-size: .5rem;
        color: #fff;
    }
    .discuss div:nth-child(1) div:nth-child(2) {
        font-size: .5rem;
         color: #fff;
    }
     .discuss div:nth-child(1) div:nth-child(3) i{
         font-size: .5rem;
          color: #fff;
          margin-right: 0.2rem;
     }
    .discuss .centen{
        width: 100%;
        height:4.1rem;
        
        border-bottom: 0.252rem solid #faf7f9;
       
    }
    .discuss .centen div:nth-child(1){
        display: flex;
        margin-left: 0.2rem;
       
    }
    .tou{
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 50%;
        background: #0f0;
     margin-top: 0.3rem;
    }
    .tou img{
        width: 100%;
        display: block;
        height: 100%;
    }
    .discuss .centen div:nth-child(1) div:nth-child(2){
        margin-top: 0.2rem;
    }
    .discuss .centen div:nth-child(1) div:nth-child(2) span{
        font-size: 0.3rem;
        color: #333333;
        margin-left: 0.3rem;
       margin-top: 0.3rem;
       display: block;
    }
     .discuss .centen div:nth-child(1) div:nth-child(2) p{
         font-size: .2rem;
         color: #bcbcbc;
         line-height: 0.5rem;
         margin-left: 0.3rem;
     }
      .discuss .centen div:nth-child(1) div:nth-child(2) p span{
          color: #bbcbcb;
          margin: 0;
          float: left;
          margin-top: 0.2rem;
      }
       .centen div:nth-child(2) div:nth-child(1) p{
             font-size: .3rem;
             padding-left: 1.5rem;
       }
      .centen div:nth-child(2) div:nth-child(2){
          width: 5.64rem;
          height: 1.45rem;
          background: #27d1d0;
          border-radius: .12rem;
          margin-left: 1.5rem;
          margin-top: 0.2rem;
      }
        .centen div:nth-child(2) div:nth-child(2) span{
            font-size: .4rem;
            padding-top: 0.2rem;
            padding-left: 0.2rem;
            color: #000;
            display: block;
        }
         .centen div:nth-child(2) div:nth-child(2) p{
             font-size: .22rem;
             padding-left: 0.4rem;
             color: #666;
             line-height: 0.4rem;
         }
      

</style>
