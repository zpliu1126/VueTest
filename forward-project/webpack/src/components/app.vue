<template>
	<div class="app-container">
	<!-- 顶部内容 mint-ui组件 -->
	<mt-header fixed :title="header"></mt-header> 
	<router-view></router-view>
	<!-- 底部内容 -->
	<mt-tabbar v-model="selected">
	  <mt-tab-item v-for="item in data1" :id="item.content" :key="item.id" >
	    <img slot="icon" >
	    {{item.content}}
	  </mt-tab-item>
	</mt-tabbar>
	</div>
</template>
<script>
	export default {
		data:function(){
			return{
				header:"hello Vue!",
				data1:[{
					id:0,
					content:"外卖"
				},{
					id:1,
					content:"订单"
				},{
					id:2,
					content:"发现"
				},{
					id:3,
					content:"我的"
				}
				],
				selected:''
			}
		}
	}	
</script>
<style scoped>

</style>