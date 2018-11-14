<template>
	<div id="content">
		<ul>
			<li>
				<img src="../../../static/img/keji_icon@2x.png" alt="">
				<span>科技</span>
			</li>
			<li>
				<img src="../../../static/img/shenghuo_icon@2x.png" alt="">
				<span>生活</span>
			</li>
			<li>
				<img src="../../../static/img/shishang_icon@3x.png" alt="">
				<span>时尚</span>
			</li>
			<li>
				<img src="../../../static/img/yule_icon@2x.png" alt="">
				<span>娱乐</span>
			</li>
			<li>
				<img src="../../../static/img/wenyi_icon@2x.png" alt="">
				<span>文艺</span>
			</li>
			<li>
				<img src="../../../static/img/jiankang_icon@2x.png" alt="">
				<span>健康</span>
			</li>
			<li>
				<img src="../../../static/img/jianzhi_icon@2x.png" alt="">
				<span>兼职</span>
			</li>
			<li>
				<img src="../../../static/img/kaoshi_icon@2x.png" alt="">
				<span>考试</span>
			</li>
		</ul>
		<div>
			<p>皇城根美食家</p>
			<div class="image">
				<img src="../../../static/img/headerimg.png" alt="">
				<img src="../../../static/img/startbucks.jpg" alt="">
			</div>
			<div class="showpro">
				<h2>玩转星巴克隐藏菜单</h2>
				<div class="hot">
					<div>
						<i class="iconfont icon-xiaoxi4"></i>
						<span>18</span>
					</div>
					<div>
						<i class="iconfont icon-aixin1"></i>
						<span>3k</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	#content{
		width:100%;
		height:100%;
		padding-bottom:.98rem;
		background:#faf7f9;
	}
	#content p{
		padding:.4rem 0 0 1.7rem;
		line-height:.5rem;
		font-size:.22rem;
		color:#666666
	}
	.image{
		position:relative;
		padding-left:.24rem;
	}
	#content .image img:nth-child(1){
		width:1.24rem;
		height:1.24rem;
		position:absolute;
		top:-.7rem;
		
	}
	#content .image img:nth-child(2){
		width:7rem;
		height:4.8rem;
	}
	.showpro{
		display:flex;
		justify-content: space-between;
		padding:.22rem .24rem;
	}
	.hot{
		display:flex;
		width:1.48rem;
		justify-content: space-between;
	}
	.hot>div{
		color:#999999;
	}
	.hot>div:nth-child(1){
		margin-right:.1rem;
		display:flex;
	}
	.hot>div:nth-child(2){
		display:flex;
	}
	#content>ul{
		width:100%;
		overflow: hidden;
		height:1.5rem;
		display:flex;
		align-items:center;
		margin-top:1.7rem;
		padding-bottom:1rem;
		border-bottom:1px solid #eeeeee;
	}
	#content>ul>li{
		width:.8rem;
		height:.8rem;
		margin:0 .4rem;
		text-align:center;
		color:#666666;
	}
	ul>li>img{
		width:.8rem;
		margin-bottom:.2rem;
		height:.8rem;
	}
</style>