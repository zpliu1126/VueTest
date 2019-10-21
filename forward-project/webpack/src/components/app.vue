<template>
	<div class="app-container">
		<el-container>
			<el-header height="80px">header</el-header>
			<el-container>
				<el-aside width="200px">aside</el-aside>
				<el-main>main
					<el-button style="border-radius: 20px">
						点我
                    </el-button>
                    <el-button><i class="el-icon-s-flag" autofocus="true"></i></el-button>
				</el-main>
			</el-container>
        </el-container>
    </div>
</template>
<script>
    import myheader from './header.vue'
    export default {
        data: function() {
            return {
                data1: [{
                    id: 0,
                    content: "Home",
                    link: "/#/home",
                    icon: "mui-icon-home"
                }, {
                    id: 1,
                    content: "订单",
                    link: "/#/buy",
                    icon: "mui-icon-email"
                }, {
                    id: 2,
                    content: "发现",
                    link: "/#find",
                    icon: "mui-icon-chatbubble"
                }, {
                    id: 3,
                    content: "我的",
                    link: "/#my",
                    icon: "mui-icon-location"
                }],
                selected: ''
            }
        },
        components: {
            'myheader': myheader
        },
    }
</script>
<style scoped>
    .el-header {
        background-color: grey;
        text-align: center;
    }
    
    .el-aside {
        background-color: #d3dce6;
        color: #333;
    }
    
    .el-main {
        background-color: #E9EEf3;
    }

</style>