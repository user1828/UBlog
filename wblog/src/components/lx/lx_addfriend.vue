<template>
    <div>
        <header-com></header-com>
        <section id="term">
            <p>
                <span>请输入用户昵称</span>
                <input type="text">
            </p>
            <p>
                <span>请输入学校</span>
                <input type="text">
            </p>
            <p>
                <span>请输入专业</span>
                <input type="text">
            </p>
            <p class="add">添加标签
                <i class="iconfont icon-jiahao2fill"  @click="handleGo()"></i>
            </p>
            
        </section>
        <b_button-com></b_button-com>
    </div>
</template>


<style>
    #term p {
        font-size:.28rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(39,209,208,1);
        opacity:0.6;
        height: 1.09rem;
        line-height: 1.09rem;
        border-bottom:.02rem solid #eee;
        margin: 0 .24rem;
        padding-left: .4rem;
    }
    #term input {
        padding-left: .1rem;
        border:none;
        outline: none;
    }
    #term .add{
        display: flex;
        justify-content:space-between;
    }
    #term .add i{
        font-size: .4rem;
    }
</style>



<script>
import Header from "./common/header";
import b_button from './common/b_button';
import Vuex from "vuex"
export default {
    components:{
        "header-com":Header,
        "b_button-com":b_button
    },
    methods:{
         handleGo(){
             this.$router.push("/lx_addtab");
         }
    },
    computed:{
        ...Vuex.mapState({
            name : state=>state.lx.name
        })
    }
}
</script>