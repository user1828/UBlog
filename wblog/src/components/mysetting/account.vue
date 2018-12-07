<template>
	<div class="account">
		<releaseHeader-com>
			<p slot="title">切换账号</p>
		</releaseHeader-com>
		<section>
        <dl class="content" @click="handleGo()">
          <dt>
            <img src="../../../static/img/lx_smalltou.gif" alt>
          </dt>
          <div class="xinxi">
            <dd>
              <span class="name">咔咔</span>
            </dd>
          </div>
        </dl>
    </section>
	</div>
</template>

<script>
	import releaseHeader from "./common/header";
	export default{
		data(){
			return{
				list:[
					{
						
					}
				]
			}
		},
		mounted(){
			
		},
		components:{
			"releaseHeader-com":releaseHeader

		}
	}
</script>

<style scoped>
	.account{
		width: 100%;
		height: 13.34rem;
		background: #fff;
	}
	.content{
		height:1.28rem;
		border-bottom:1px sold #ccc;
	}
	.content>dt{
		float: left;
	}
	.xinxi{
		float: left;
		height:100%;
		line-height:1.28rem;
		padding-left:20px;
		font-size:30px;
		font-weight: 900;
	}
</style>