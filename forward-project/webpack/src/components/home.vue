<template>
<div class="hoemContainer">
<!-- 	轮播图区域
 -->	<mt-swipe :auto="2000">
	  <mt-swipe-item v-for="item in datalist" :key="item.id">{{item.title}}</mt-swipe-item>
	</mt-swipe>
	<el-row>
	  <el-button>默认按钮</el-button>
	  <el-button type="primary">主要按钮</el-button>
	  <el-button type="success">成功按钮</el-button>
	  <el-button type="info">信息按钮</el-button>
	  <el-button type="warning">警告按钮</el-button>
	  <el-button type="danger">危险按钮</el-button>
	</el-row>
<!-- 	九宫格区域-->
<ul class="mui-table-view mui-grid-view mui-grid-9">
	
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/news">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/blog">
		                    <span class="mui-icon mui-icon-compose"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Blog</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
</ul>
 </div>
</template>
<script>
	import { Toast } from 'mint-ui';
	export default {
		data:function(){
			return{
				datalist:[],
				requsetToast:null
			}
		},
		methods: {
			getList() {
				this.$http.get('API').then(reponse =>{
						this.requsetToast.close()
						this.datalist=reponse.body
						console.log(reponse)
					
				},response => {
				// error callback
				this.requsetToast.close()
				Toast({
				  message: '服务器开小差啦！',
				  position: 'middle',
				  duration: 4000
				});
			})
			}
		},
		created:function(){
			this.requsetToast=Toast({
			  message: '正在请求数据',
			  position: 'middle',
			  duration: -1
			});
			this.getList()
		}
		
		
	}
	
</script>
<style scoped>
.mint-swipe{
	height: 200px;
	color: white;
	text-align: center;
}
.mint-swipe-item:nth-child(1){
	background-color: green;
}
.mint-swipe-item:nth-child(2){
	background-color: blue;
}
.mint-swipe-item:nth-child(3){
	background-color:red;
}

</style>