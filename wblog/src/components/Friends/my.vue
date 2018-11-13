<template>
    <div>
        <div class="my">
            <div class="header">
                        <img class="bj" src="../../../static/img/banner.png">
                    <div>
                        <img src="../../../static/img/touxiang.png"/>
                    </div>
                    
                    <div>
                    <ul>
                        <li v-for="(item,index) in str"  
                        :class="active == index?'active':''" 
                        
                        >
                          <router-link :to="{name:item.name}">{{item.title}}</router-link>
                        </li>
                    </ul>
                    </div>
            </div>
           
        </div>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    .my{
    width: 100%;
    height: 100%;
    }
    .my .header .bj{
        width: 100%;
        height: 5.88rem;
         padding-bottom: .4rem;
    }
     .my .header{
         width: 100%;
         height: 100%;
     }
    .my .header div:nth-child(2){
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        left: 3.15rem;
        top: 2.93rem;

    }
    .my .header div:nth-child(2) img{
        width: 100%;
        height: 100%;
    }
     .my .header ul li {
         width: 1.6rem;
         height: .6rem;
         display: block;
         border-radius: 0.3rem;
         font-size: .34rem;
         line-height: .6rem;
         color: #090909;
         text-align: center;
         font-weight: 600;
     }
     .my .header ul li:nth-child(1){
            position: absolute;
            left: 2.12rem;
            top: 4.56rem;
            
     }
      .my .header ul li:nth-child(2){
          position:absolute;
          right: 2.09rem;
          top: 4.56rem;
      }
    .router-link-active{
        background: #F4F6F8;
        border-radius: 0.3rem;
        color: #090909;
        line-height: .6rem;
        width: 1.6rem;
         height: .6rem;
         font-size: .34rem;
         display: block;
    }
     
</style>

<script>
export default {
    data(){
        return{
            active:0,
            str:[
                {
                    name:"focus",
                    title:"我的动态"
                    },
                    {
                    name:"mydynamic",
                    title:"我的关注"
                    
            }]
        }
    },
    methods:{
     handleToggle(index){
     
     }  
}
}
</script>
