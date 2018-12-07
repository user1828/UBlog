<template>
    <div>
        <header-com>
            <span slot = "title">添加好友</span>
        </header-com>
        <section>
            <h3>
                <i class="iconfont icon-icon--"></i>
                <span>选择标签</span>
            </h3>
            <div class="tabdet">
                <div  :class= "item.status==1? tabclass:tabaclass"
                 v-for="(item,index) in tabarr" @click="handleSeltab(index)">
                    <p>
                        <i :class = 'item.cl' ></i>
                    </p>
                    <div>{{item.name}}</div>
                </div>
            </div>
        </section>
        <b_button>
            <div class="btn" slot="title" @click="handleGo()">OK!</div>
        </b_button>
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
import Vuex from "vuex";

export default {
    data(){
        return{
            tabclass:"tab-com",
            tabaclass : "tab-com tabclick",
        }
    },
    components:{
        "header-com":header,
        "b_button":b_button
    },
    methods:{
        ...Vuex.mapActions({
            getTabs:"lx/getTabs",
            handleSeltab:"lx/handleSeltab",
            handleSeltabarr:"lx/handleSeltabarr"
        }),
        handleGo(){
            this.$router.back();
            // console.log("111")
        }
    },
    created(){
        this.getTabs();
    },
    computed:{
        ...Vuex.mapState({
            tabarr:state=>state.lx.tabarr,
        })
    },
    
}
</script>