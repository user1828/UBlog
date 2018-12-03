<template>
	<div class="messageList">
		<section class="app-content">
			<div id="wechat">
				<ul class="wechat-list">
					<li class="list-row line-bottom">
						<div class="list-info">
							<div class="header-box"><i class="new-msg-count" style="display: none;">3</i> <i class="new-msg-dot" style="display: none;"></i>
								<div class="header"><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png"></div>
							</div>
							<div class="desc-box">
								<div class="desc-time">22:04</div>
								<div class="desc-author">阿荡</div>
								<div class="desc-msg">
									<div class="desc-mute iconfont icon-mute" style="display: none;"></div> <span style="display: none;">阿荡:</span>
									<span>来呀 快活啊</span>
								</div>
							</div>
						</div>
						<div class="operate-box">
							<div class="operate-unread">标为未读</div>
							<div class="operate-del">删除</div>
						</div>
					</li>
					<li class="list-row line-bottom">
						<div class="list-info">
							<div class="header-box"><i class="new-msg-count" style="display: none;">3</i> <i class="new-msg-dot"></i>
								<div class="header multi-header"><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png"><img
									 src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"></div>
							</div>
							<div class="desc-box">
								<div class="desc-time">22:04</div>
								<div class="desc-author">收购万达讨论群</div>
								<div class="desc-msg">
									<span>夜华:</span> <span>我试一试</span>
								</div>
							</div>
						</div>
						<div class="operate-box">
							<div class="operate-read">标为已读</div>
							<div class="operate-del">删除</div>
						</div>
					</li>
					<li class="list-row line-bottom">
						<div class="list-info">
							<div class="header-box"><i class="new-msg-count" style="display: none;">1</i> <i class="new-msg-dot" style="display: none;"></i>
								<div class="header multi-header"><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg"><img src="https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg"><img
									 src="https://sinacloud.net/vue-wechat/images/headers/header01.png"></div>
							</div>
							<div class="desc-box">
								<div class="desc-time">22:04</div>
								<div class="desc-author">收购淘宝讨论群</div>
								<div class="desc-msg">
									<span>诸葛亮:</span> <span>冒个泡</span>
								</div>
							</div>
						</div>
						<div class="operate-box">
							<div class="operate-unread">标为未读</div>
							<div class="operate-del">删除</div>
						</div>
					</li>
					<li class="list-row line-bottom">
						<div class="list-info">
							<div class="header-box"><i class="new-msg-count">3</i> <i class="new-msg-dot" style="display: none;"></i>
								<div class="header"><img src="https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"></div>
							</div>
							<div class="desc-box">
								<div class="desc-time">22:04</div>
								<div class="desc-author">孙权</div>
								<div class="desc-msg">
									<div class="desc-mute iconfont icon-mute" style="display: none;"></div> <span style="display: none;">孙权:</span>
									<span>容我三思</span>
								</div>
							</div>
						</div>
						<div class="operate-box">
							<div class="operate-read">标为已读</div>
							<div class="operate-del">删除</div>
						</div>
					</li>
					<li class="list-row line-bottom">
						<div class="list-info">
							<div class="header-box"><i class="new-msg-count">1</i> <i class="new-msg-dot" style="display: none;"></i>
								<div class="header"><img src="https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg"></div>
							</div>
							<div class="desc-box">
								<div class="desc-time">22:04</div>
								<div class="desc-author">孙尚香2</div>
								<div class="desc-msg">
									<div class="desc-mute iconfont icon-mute" style="display: none;"></div> <span style="display: none;">孙尚香:</span>
									<span>夫君,身体要紧~ </span>
								</div>
							</div>
						</div>
						<div class="operate-box">
							<div class="operate-read">标为已读</div>
							<div class="operate-del">删除</div>
						</div>
					</li>
					<li class="list-row line-bottom">
						<div class="list-info">
							<div class="header-box"><i class="new-msg-count" style="display: none;">1</i> <i class="new-msg-dot"></i>
								<div class="header"><img src="https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg"></div>
							</div>
							<div class="desc-box">
								<div class="desc-time">22:04</div>
								<div class="desc-author">关羽</div>
								<div class="desc-msg">
									<span style="display: none;">关羽:</span> <span>三姓家奴！ </span>
								</div>
							</div>
						</div>
						<div class="operate-box">
							<div class="operate-read">标为已读</div>
							<div class="operate-del">删除</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.app-content {
		overflow-x: hidden;
		overflow-y: auto;
		z-index: 1;
		position: absolute;
		top: 0.88rem;
		left: 0;
		padding-bottom: 49px;
		width: 100%;
	}

	#wechat .wechat-list {
		position: relative;
		overflow-x: hidden;
		z-index: 1;
	}

	#wechat .wechat-list .list-row {
		height: 64px;
		position: relative;
		overflow: hidden;
		border-bottom: 1px solid #ccc;
		margin-bottom: 5px;
	}

	#wechat .wechat-list .list-row .list-info {
		position: relative;
		z-index: 2;
		left: 0;
		width: 100%;
		height: 64px;
		padding: 8px;
		background-color: #fff;
	}

	#wechat .wechat-list .list-row .list-info .header-box {
		position: relative;
		float: left;
		width: 48px;
		height: 48px;
		margin-right: 10px;
	}

	.new-msg-count {
		position: absolute;
		font-style: normal;
		font-family: PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Helvetica;
		right: -9px;
		top: -5px;
		z-index: 2;
		padding: 0 4px;
		width: auto;
		min-width: 18px;
		height: 18px;
		line-height: 18px;
		border-radius: 9px;
		color: #fff;
		text-align: center;
		font-size: 14px;
		background-color: #f43531;
	}

	.new-msg-dot {
		position: absolute;
		right: -4px;
		top: -3px;
		width: 10px;
		height: 10px;
		z-index: 2;
		border-radius: 50%;
		color: #ffffff;
		text-align: center;
		background-color: red;
		background-color: #f43531;
		font-size: 0;
	}

	#wechat .wechat-list .list-row .list-info .header-box .header {
		height: 100%;
		border-radius: 5px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		display: -webkit-flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-align: start;
		-webkit-align-items: flex-start;
		-ms-flex-align: start;
		align-items: flex-start;
		overflow: hidden;
		background: #dddbdb;
	}

	#wechat .wechat-list .list-row .list-info .header-box .header img {
		width: 48px;
		height: 48px;
		border: 0;
	}

	#wechat .wechat-list .list-row .operate-box {
		position: absolute;
		z-index: 1;
		height: 100%;
		right: 0;
		top: 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}

	#wechat .wechat-list .list-row .list-info .desc-box .desc-time {
		float: right;
		color: #b8b8b8;
	}
	.desc-msg{
		margin-top: 10px;
	}
</style>
