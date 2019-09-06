<template>
	<div class="app-container">
	<myheader></myheader>
	<router-view ></router-view>
	<!-- 底部内容 -->
	<mt-tabbar v-model="selected" >
	  <mt-tab-item  :id="item.content" v-for="item in data1" :key="item.id" :href="item.link">
	    <span slot="icon" class="mui-icon" :class="item.icon"></span>
	    {{item.content}}
	  </mt-tab-item>
	</mt-tabbar>
	</div>
</template>
<script>
	import myheader from './header.vue'
	export default {
		data:function(){
			return{
				data1:[{
					id:0,
					content:"Home",
					link:"/#/home",
					icon:"mui-icon-home"
				},{
					id:1,
					content:"订单",
					link:"/#/buy",
					icon:"mui-icon-email"
				},{
					id:2,
					content:"发现",
					link:"/#find",
					icon:"mui-icon-chatbubble"
				},{
					id:3,
					content:"我的",
					link:"/#my",
					icon:"mui-icon-location"
				}
				],
				selected:''
			}
		},
		components: {
			'myheader':myheader
		},
	}	
</script>
<style scoped>
.app-container{
	padding-bottom: 50px;
}
.mint-tabbar{
	position: fixed;
}
</style>