<template>
  <div class="tab" ref="tab">
    <ul class="tab_content" ref="tabWrapper">
      <li class="tab_item" v-for="(item,index) in itemList" ref="tabitem" @click="handleGo(index)">
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
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.tab, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    handleGo(index) {
      switch (index) {
        case 0:
          this.$router.push("kepu");
          break;

        case 1:
          this.$router.push("seikasu");
          break;
        case 2:
          this.$router.push("fashion");
          break;
        case 3:
          this.$router.push("movie");
          break;
        case 4:
          this.$router.push("art");
          break;
        case 5:
          this.$router.push("exercise");
          break;
        case 6:
          this.$router.push("part");
          break;
        case 7:
          this.$router.push("exam");
          break;
      }
    }
  }
};
</script>
	
<style scoped>
.tab {
  width: 100%;
  overflow: hidden;
  margin-top: 1.6rem;
}
.tab_content {
  display: flex;
  padding-left: 0.24rem;
  color: #666;
  justify-content: space-around;
}
.tab_item {
  display: block;
  width: 3rem;
  height: 1.2rem;
  text-align: center;
}
.tab_item img {
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.3rem;
}
.tab_item > span {
  display: block;
  width: 0.8rem;
  margin-left: 0.3rem;
}
</style>
