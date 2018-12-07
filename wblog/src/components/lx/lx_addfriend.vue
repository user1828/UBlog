<template>
    <div>
        <header-com>
            <span slot = "title">添加好友</span>
        </header-com>
        <section id="term">
            <p>
                <span>请输入用户昵称</span>
                <input type="text" v-model="obj.name">
            </p>
            <p>
                <span>请输入学校</span>
                <input type="text" v-model="obj.school">
            </p>
            <p>
                <span>请输入专业</span>
                <input type="text" v-model="obj.subject">
            </p>
            <p class="add">添加标签
                <i class="iconfont icon-jiahao2fill" @click="handleGo(),handlexinxi(obj)"></i>
            </p>
            
        </section>
        <b_button-com>
            <div class="btn" slot="title" @click="handlexinxi(obj),handlesearch(obj),handlesGo()">搜索</div>
        </b_button-com>
        
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
        background: #fff;
        font-size:30px;
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
    data(){
        return{
           obj:{
                name:'',
                school:'',
                subject:'',
                tabarr:[],
           }
        }
    },
    created(){
        this.obj.name = this.searchfriend.name;
        this.obj.school = this.searchfriend.school;
        this.obj.subject = this.searchfriend.subject;
        this.obj.tabarr = this.search_tabarr;
    },
    components:{
        "header-com":Header,
        "b_button-com":b_button
    },
    methods:{
        ...Vuex.mapActions({
            handlesearch:"lx/handlesearch",
            handlexinxi:"lx/handlexinxi"
        }),
         handleGo(){
             this.$router.push("/lx_addtab");
         },
         handlesGo(){
             this.$router.push("lx_search");
         }
    },
    computed:{
        ...Vuex.mapState({
           searchfriend:state=>state.lx.searchfriend,
            search_tabarr:state=>state.lx.tabarr,
        }),      
    }
}
</script>