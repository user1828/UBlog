<template>
	<div class="friendList">
		<div class="friendList_l">

			<!-- 好友列表模拟的数据 -->
			<section>
				<router-link :to="{ path: '/chatList', query: { name: '消息' }}" v-for="(item,index) in user_friends" :key="index">
				<div id = "cells_box" class="weui-cells__title" >A</div>
					<div class="weui-cells" id = "user_box">
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img :src="item.user_img" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								{{item.nickname}}
							</div>
						</div>
					</div>
				</router-link>

			</section>

			<!-- <ul class="initials">
                <li v-for="(item,index) in letters">
                    26个字母
                     <p>{{item}}</p> -->
			<!-- <ol class="usename"> -->
			<!-- <li v-for="(item,index) in friendList"> -->
			<!--<p>{{item+Math.round(Math.random()*10)}}</p>-->
			<!--<p>{{item+Math.round(Math.random()*10)}}</p>-->
			<!--<p>{{item+Math.round(Math.random()*10)}}</p>-->
			<!-- {{item}} -->
			<!-- </li> -->
			<!-- </ol> -->
			<!-- </li> -->
			<!-- </ul> -->
		</div>
		<div class="initial-bar">
			<!-- <ul>
				<li v-for="(item,index) in letters">
					<p>{item}</p>
				</li>
			</ul> -->
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		computed: {
			...Vuex.mapState({
				letters: state => state.letters,
				friendList: state => state.friendList,
				user_id:state=>state.hl.user_id,
				user_friends:state=>state.user_friends,
			})
		},
		created() {
			this.throughLetters();
			this.getFriends(this.user_id);
		},
		methods: {

			...Vuex.mapActions({
				throughLetters: "throughLetters",
				getFriends: "getFriends"
			})
		}

	};

	/*
	    好友数据在通过接口获取之后就存入vuex中
	    */
</script>

<style scoped>
	.friendList {
		width: 100%;
		height: 100%;
		position: relative;
		left: 0;
		top: 2.08rem;
		bottom: .98rem;
		z-index: 1;
	}

	.initials>li>p:nth-child(1) {
		background: #faf7f9;
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: left;
	}

	.usename>li {
		width: 100%;

	}

	.usename>li>p {
		line-height: 140px;
		border-bottom: 2px solid #eee;
	}

	.weui-cell__hd>img {
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
	.weui-cells__title {
    margin-top: .77em;
    margin-bottom: .3em;
    padding-left: 15px;
    padding-right: 15px;
    color: #999;
    font-size: 14px;
}
#cells_box{
	height:.5rem;
	font-size:30px;
}
#user_box{
	height:1rem;
	font-size:30px;
}
#user_box>div{
	height: 100%;
}
#user_box>div>div{
	height:100%;
	width:.8rem;
	line-height:1rem;
}
#user_box>div>div>img{
	width:100%;
	height:100%;
}
</style>
