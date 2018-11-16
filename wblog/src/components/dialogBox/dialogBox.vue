<template>
    <div class="dialogBox">
        <header-com></header-com>
        <!-- 对话消息框 -->
        <dialogBoxes-com></dialogBoxes-com>
        <!-- 键盘控件 -->
        <KeyboardView-com></KeyboardView-com>
    </div>
</template>

<script>
import header from "../../components/header/chatHeader";
import dialogBoxes from "./dialogBoxes";
import KeyboardView from "./KeyboardView";
export default {
  components: {
    "header-com": header,
    "dialogBoxes-com": dialogBoxes,
    "KeyboardView-com": KeyboardView
  }
};
</script>

<style scoped>
</style>
