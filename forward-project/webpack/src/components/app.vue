<template>
	<div class="app-container">
	<myheader></myheader>
	<router-view></router-view>
	<!-- 底部内容 -->
	<mt-tabbar v-model="selected" >
	  <mt-tab-item  :id="item.content" v-for="item in data1" :key="item.id" :href="item.link">
	    <img slot="icon" >
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
					link:"/#/login"
				},{
					id:1,
					content:"订单",
					link:"/#/login"
				},{
					id:2,
					content:"发现",
					link:"/login"
				},{
					id:3,
					content:"我的",
					link:"/login"
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

</style>