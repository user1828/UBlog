<template>
<div>
     <div class="focus" v-for="(item,index) in arr">
                <div >
                    <h2>{{}}</h2>
                    <p class="pl"></p>
                </div>
                <div>
                    <ul>
                        <li v-for="(ite,ind) in imgs[index][0].picture">
                            <img :src="ite">
                            
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <div>
                        <p><span>6</span>分钟前</p>
                    </div>
                    <div>
                          <i class="iconfont icon-good">
                              
                          </i>
                            <router-link to="discuss">
                          <i class="iconfont  icon-message">
                             
                          </i>
                            </router-link>
                    </div>
                </div>
                <div>
                    <p  v-for="(item,index) in commentsl">
                        <span>{{item.id}}</span>:
                        {{item.content}}
                    </p>
                    
                  
                </div>
            </div>
            
        </div>   
         
    </div>
</template>
<script>
import axios from "axios";
import Vuex from "vuex"
export default {
  data() {
    return {
        
    };
  },
  // {
  //       "id": 2,
  //       "uid": 2,
  //       "content": "你吃饭了吗",
  //       "picture": null,
  //       "location": null,
  //       "createtime": "2018-11-21T20:37:50.000+0000",
  //       "isown": 0,
  //       "commentslist": [
  //           {
  //               "id": null,
  //               "fcmid": 0,
  //               "uid": 0,
  //               "content": "什么好吃的?",
  //               "create_time": "2018-11-28T20:38:54.000+0000",
  //               "like_count": 0
  //           }
  //       ]
  //   }

  created() {
      this.handleAdd();
      //  axios({
      //      method:"post",
      //      url:"http://localhost:3000/arr",
      //      data:{
      //        id_name:"1",
      //        list:[
      //           {picture:[ 
      //              "../../../static/img/u=3797481993,1929347741&fm=27&gp=01@3x.png",
      //                "../../../static/img/u=3797481993,1929347741&fm=27&gp=01@3x.png",
      //                 "../../../static/img/u=3797481993,1929347741&fm=27&gp=01@3x.png"
      //          ]},
      //          {
      //           commentslist:[
      //            {
      //              content:"什么好吃的？",
                   
      //              id:"安心哦"
      //            }, 
      //             {
      //              content:"什么好吃的？",
                   
      //              id:"安心哦"
      //            },
      //             {
      //              content:"什么好吃的？",
               
      //              id:"安心哦"
      //            }
                   
      //          ]
      //          },

      //          {
      //              comments:"昨天天气好好",
      //             create_time:"2018-11-28T20:20:38:54.000+0000",
      //          }
      //        ]
              
               
           
      //      }
      //  }).then((data)=>{
      //      console.log(data)
      //  })
  },
  computed:{
      ...Vuex.mapState({
          arr:state=>state.arr,
          imgs:state=>state.imgs,
          commentsl:state=>state.commentsl,
          comments:state=>state.comments

      })
  },
  methods:{
      ...Vuex.mapActions({
          handleAdd:"handleAdd"
      })
  }
}
</script>
<style scoped>
.focus {
  width: 100%;
  height: 5.78rem;
  /* background: #ccc; */
}
.focus div:nth-child(1) {
  display: flex;
  padding-top: 0.2rem;
}
.focus div:nth-child(1) h2 {
  margin-left: 0.47rem;
  font-size: 0.36rem;
}
.focus div:nth-child(1) .pl {
  color: #1d1d1d;
  font-size: 0.3rem;
  margin-top: 0.45rem;
  padding-left: 0.5rem;
}
.focus div:nth-child(2) {
  display: flex;
  padding-top: 0.2rem;
  padding-left: 1.1rem;
}
.focus div:nth-child(2) ul {
  display: flex;
}
.focus div:nth-child(2) ul li img {
  width: 1.45rem;
  display: block;
  height: 1.45rem;
  margin: 0 0.29rem;
}
.focus div:nth-child(3) {
  display: flex;
}
.focus div:nth-child(3) div {
  padding-top: 0.3rem;
}
.focus div:nth-child(3) div p {
  color: #1d1d1d;
  padding-left: 1.5rem;
  font-size: 0.18rem;
  padding-top: 0.2rem;
}
.focus div:nth-child(3) div:nth-child(2) {
  padding-left: 2.8rem;
}
.focus div:nth-child(3) div:nth-child(2) i:nth-child(1) {
  /* width: .29rem;
           height: .31rem; */
  font-size: 0.4rem;
  margin-left: 0.35rem;
}
.focus div:nth-child(3) div:nth-child(2) .router-link i {
  /* width: 0.29rem;
            height: 0.29rem; */
  font-size: 0.5rem;
  margin-left: 0.35rem;
}
.focus div:nth-child(4) {
  width: 4.93rem;
  height: 1.47rem;
  background: #f4f6f8;
  margin: 0 auto;
  margin-top: 0.29rem;
}
.focus div:nth-child(4) span {
  color: #0d70f8;
  font-size: 0.24rem;
  line-height: 0.48rem;
}
.focus div:nth-child(4) p {
  line-height: 0.48rem;
  color: #454545;
  padding-left: 0.2rem;
}
</style>
