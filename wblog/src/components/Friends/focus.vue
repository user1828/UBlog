<template>
<div>
     <div class="focus">
                <div>
                    <h2>今天</h2>
                    <p class="pl">昨天天气超棒</p>
                </div>
                <div>
                    <ul>
                        <li v-for="(item,index) in arr">
                            <img :src="item">
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <p><span>6</span>分钟前</p>
                    </div>
                    <div>
                          <i>
                              <img src="../../../static/img/dianzan _icon.png">
                          </i>  
                          <i>
                              <img src="../../../static/img/pinglun_icon.png">
                          </i>
                    </div>
                </div>
                <div>
                    <p>
                        <span>安琪</span>:
                        对呀天气好棒
                    </p>
                     <p>
                        <span>安琪</span>:
                        对呀天气好棒
                    </p>
                     <p>
                        <span>安琪</span>:
                        对呀天气好棒
                    </p>
                </div>
            </div>
            
        </div>   
         </div>
</template>
<script>
export default {
        data(){
            return{
                arr:[
                    "../../../static/img/u=3797481993,1929347741&fm=27&gp=01@3x.png",
                    "../../../static/img/u=3797481993,1929347741&fm=27&gp=01@3x.png",
                    "../../../static/img/u=3797481993,1929347741&fm=27&gp=01@3x.png",
                ]
            }
        }
}
</script>
<style scoped>
  .focus{
          width: 100%;
          height: 5.78rem;
          /* background: #ccc; */
      }
       .focus div:nth-child(1){
          display: flex;
            padding-top: 0.2rem;
      }
       .focus div:nth-child(1) h2{
          margin-left: 0.47rem;
          font-size: .36rem;
      }
      .focus div:nth-child(1) .pl{
          color: #1D1D1D;
          font-size: 0.3rem;
           margin-top: 0.45rem;
          padding-left: 0.5rem;
      }
       .focus div:nth-child(2){
          display: flex;
          padding-top: 0.2rem;
          padding-left: 1.1rem;
      }
      .focus div:nth-child(2) ul{
          display: flex;
      }
      .focus div:nth-child(2) ul li img{
            width: 1.45rem;
            display: block;
            height: 1.45rem;
            margin: 0 .29rem;
        }
     .focus div:nth-child(3){
          display:flex;
      }
     .focus div:nth-child(3) div{
          padding-top: 0.3rem;
      }
       .focus div:nth-child(3) div p {
           color:#1D1D1D;
           padding-left: 1.5rem;
           font-size: 0.18rem;
           
       }
      .focus div:nth-child(3) div:nth-child(2){
           padding-left: 2.8rem;
       }
        .focus div:nth-child(3) div:nth-child(2) i:nth-child(1) img{
           width: .29rem;
           height: .31rem;
            margin-left: 0.35rem;
       }
        .focus div:nth-child(3) div:nth-child(2) i:nth-child(2) img{
            width: 0.29rem;
            height: 0.29rem;
            margin-left: 0.35rem;
        }
        .focus div:nth-child(4){
            width: 4.93rem;
            height: 1.47rem;
            background: #F4F6F8;
            margin: 0 auto;
           margin-top: .29rem;
        }
        .focus div:nth-child(4) span{
            color: #0D70F8;
            font-size: .24rem;
             line-height: 0.48rem;
        }
        .focus div:nth-child(4) p{
            line-height: 0.48rem;
            color: #454545;
            padding-left: .2rem;
        }
</style>
