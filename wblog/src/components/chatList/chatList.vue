<template>
    <div class="chatList">
        <header-com></header-com>
        <!-- 消息列表组件 -->
        <messageList-com></messageList-com>
    </div>
</template>

<script>
import header from "../../components/header/chatHeader";
import messageList from "./messageList";
export default {
  components: {
    "header-com": header,
    "messageList-com": messageList
  }
};
</script>

<style scoped>
</style>
