<template>
    <div class="friendList">
        <div class="friendList_l">
            <ul class="initials">
                <li v-for="(item,index) in letters">
                    <!-- 26个字母 -->
                    <p>{{item}}</p>
                    <ol class="usename">
                        <li> 
                            <p>{{item+Math.round(Math.random()*10)}}</p>
                            <p>{{item+Math.round(Math.random()*10)}}</p>
                            <p>{{item+Math.round(Math.random()*10)}}</p>
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
        <div class="friendList_r">
            <ul>
                <!-- <li v-for="(item,index) in letters">
                    {{item}}
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      letters: state => state.letters
    })
  },
  created() {
    this.throughLetters();
  },
  methods: {
    ...Vuex.mapActions({
      throughLetters: "throughLetters"
    })
  }
};

/*
    好友数据在通过接口获取之后就存如vuex中
    */
</script>

<style scoped>
.friendList{
    width: 100%;
    height: 100%;
    position: relative;
    left: 0;
    top: 2.08rem;
    bottom: .98rem;
    z-index: 1;
}
.initials>li>p:nth-child(1){
    background: #faf7f9;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: left;
}
.usename>li{
    width: 100%;
    
}
.usename>li>p{
    line-height: 140px;
    border-bottom:2px solid #eee; 
}
</style>
