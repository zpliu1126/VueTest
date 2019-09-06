<template>
<div class="blog-container">
	<el-button-group>
	  <el-button type="primary" icon="el-icon-upload" @click="show = !show" native-type="submit">上传</el-button>
	  <el-button type="primary" :loading="true" v-show="show">加载中</el-button>
	  </el-button-group>
	  <br>
	<el-radio-group v-model="radio" @change="changeChildren($event)">
		<el-radio-button  label="22" >222</el-radio-button>
		 <el-radio  label="2">备选项</el-radio>
	</el-radio-group>
	<el-upload
	  class="upload-demo"
	  drag
	  action="https://jsonplaceholder.typicode.com/posts/"
	  multiple>
	  <i class="el-icon-upload"></i>
	  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
	  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
	<el-switch
	  v-model="value"
	  active-color="#13ce66"
	  inactive-color="#ff4949">
	</el-switch>
</div>
</template>

<script>
	 export default {
	    data() {
	      return {
	        show:false,
			radio:'',
			value:''
	      }
	    },
		methods: {
			changeChildren(value) {
				console.log(value)
			}
		},
	  };
	
</script>

<style scoped lang="scss">
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  

</style>
