<template>
	<div class="friendList">
		<div class="friendList_l">

			<!-- 好友列表模拟的数据 -->
			<section>
				<router-link :to="{ path: '/chatList', query: { name: '消息' }}">
					<div class="weui-cells__title">B</div>
					<div class="weui-cells">
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								白浅
							</div>
						</div>
					</div>
					<div class="weui-cells__title">G</div>
					<div class="weui-cells">
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								关羽
							</div>
						</div>
					</div>
					<div class="weui-cells__title">H</div>
					<div class="weui-cells">
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/huangyueying.jpg" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								黄月英
							</div>
						</div>
					</div>
					<div class="weui-cells__title">L</div>
					<div class="weui-cells">
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/liubei.jpg" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								刘备
							</div>
						</div>
					</div>
					<div class="weui-cells__title">S</div>
					<div class="weui-cells">
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								孙尚香2
							</div>
						</div>
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								孙权
							</div>
						</div>
					</div>
					<div class="weui-cells__title">Y</div>
					<div class="weui-cells">
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								夜华
							</div>
						</div>
					</div>
					<div class="weui-cells__title">Z</div>
					<div class="weui-cells">
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								阿荡
							</div>
						</div>
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								诸葛亮
							</div>
						</div>
						<div class="weui-cell weui-cell_access">
							<div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg" class="home__mini-avatar___1nSrW"></div>
							<div class="weui-cell__bd">
								甄姬
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
			})
		},
		created() {
			this.throughLetters();
			this.getFriends();
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
</style>
