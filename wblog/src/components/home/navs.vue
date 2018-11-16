<template>
  <div class="tab" ref="tab">
    <ul class="tab_content" ref="tabWrapper">
      <li class="tab_item" v-for="item in itemList" ref="tabitem">
          <img :src="item.src">
		  <span>{{item.title}}</span>
		  
      </li>
    </ul>
  </div>
  </template>

  <script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      itemList: [
        {
          title: "科技",
          src: "../../../static/img/keji_icon@2x.png"
        },
        {
          title: "生活",
          src: "../../../static/img/shenghuo_icon@2x.png"
        },
        {
          title: "时尚",
          src: "../../../static/img/shishang_icon@3x.png"
        },
        {
          title: "娱乐",
          src: "../../../static/img/yule_icon@2x.png"
        },
        {
          title: "文艺",
          src: "../../../static/img/wenyi_icon@2x.png"
        },
        {
          title: "健康",
          src: "../../../static/img/jiankang_icon@2x.png"
        },
        {
          title: "兼职",
          src: "../../../static/img/jianzhi_icon@2x.png"
        },
        {
          title: "考试",
          src: "../../../static/img/kaoshi_icon@2x.png"
        }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.InitTabScroll();
    });
  },
  methods: {
    InitTabScroll() {
      let width = 0;
      for (let i = 0; i < this.itemList.length; i++) {
        width += this.$refs.tabitem[0].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
      }
      this.$refs.tabWrapper.style.width = width + "px";
      // this.$nextTick(()=>{
      // console.log(this.scroll);
      // if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.tab, {
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false,
        eventPassthrough: "vertical"
      });
      console.log(this.scroll);
      // }else{
      //   this.scroll.refresh()
      // }
      // });
    }
  }
};
</script>
	
  <style scoped>
.tab{
  width: 100%;
  overflow: hidden;
  margin-top: 1.6rem;
}
.tab_content {
  display: flex;
  padding-left: 0.24rem;
  color: #666;
  overflow: hidden;
}
.tab_item {
	display: block;
  /* flex: 0 0 70px; */
  width: 2.0rem;
  height: 1.2rem;
}
.tab_item img {
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.3rem;
}
.tab_item {
  display: block;
  text-align: center;
}
</style>
