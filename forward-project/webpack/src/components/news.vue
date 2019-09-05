<template>
	<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media" v-for="data in datalist">
						<a href="javascript:;" class="">
							<img class="mui-media-object mui-pull-left" :src="data.icon">
							<div class="mui-media-body">
								<h3>{{data.title}}</h3>
								<p class="mui-ellipsis">{{data.content}}</p>
							</div>
						</a>
					</li>
	</ul>
</template>
<script>
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				datalist: [],
				totast:""
			}
		},
		methods: {
			getList() {
				this.$http.get("API").then(reponse=>{
					this.totast.close()
					this.datalist=reponse.body
				},error=>{
					this.totast.close()
					Toast({
					  message: '服务器开小差啦！',
					  position: 'middle',
					  duration: 4000
					});
				})
			}
		},
		created:function(){
			this.totast=Toast({
				message: '正在请求数据',
				position: 'middle',
				duration: -1
			})
			this.getList()
		}
	}
</script>
<style scoped>
	
</style>