<template>
    <div class="addressList">
        <header-com></header-com>
        <searchBox-com></searchBox-com>
        <friendList-com></friendList-com>
    </div>
</template>

<script>
import header from "../../components/header/chatHeader";
import friendList from "./friendList";
import searchBox from "./searchBox";
export default {
  components: {
    "header-com": header,
    "searchBox-com": searchBox,
    "friendList-com": friendList
  }
};
</script>

<style scoped>
</style>
