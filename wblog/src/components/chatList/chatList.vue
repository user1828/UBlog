<template>
    <div class="chatList">
        <header-com></header-com>
        <!-- 消息列表组件 -->
        <messageList-com></messageList-com>
				<footer-com></footer-com>
    </div>
</template>

<script>
import header from "../../components/header/chatHeader";
import messageList from "./messageList";
import footer from "../common/footer.vue"
export default {
  components: {
    "header-com": header,
    "messageList-com": messageList,
		"footer-com":footer
  }
};
</script>

<style scoped>
</style>
