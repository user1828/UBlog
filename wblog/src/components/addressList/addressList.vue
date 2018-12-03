<template>
    <div class="addressList">
        <header-com></header-com>
        <searchBox-com></searchBox-com>
        <friendList-com></friendList-com>
				<footer-com></footer-com>
    </div>
</template>

<script>
import header from "../../components/header/chatHeader";
import friendList from "./friendList";
import searchBox from "./searchBox";
import footer from "../common/footer.vue"
export default {
  components: {
    "header-com": header,
    "searchBox-com": searchBox,
    "friendList-com": friendList,
		"footer-com":footer
  }
};
</script>

<style scoped>
</style>
