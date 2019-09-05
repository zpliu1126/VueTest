<template>
	<!-- 顶部内容 mint-ui组件 -->
	<mt-header  :title="header"></mt-header> 
</template>
<script>
export default {
	data:function(){
		return{
			header:"hello Vue!",
		}
	}
}

</script>
<style scoped>
.mint-header{
		color:red;
	}
</style>