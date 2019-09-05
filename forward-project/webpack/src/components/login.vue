<template>
	<mt-swipe :auto="2000">
	  <mt-swipe-item v-for="item in datalist" :key="item.id">{{item.title}}</mt-swipe-item>
	</mt-swipe>
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
				this.$http.get('http://www.zpliublog.club:8080/API').then(reponse =>{
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
	margin-top: 40px;
	height: 400px;
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