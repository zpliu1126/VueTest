//导入路由插件
import VueRouter from 'vue-router'

const router=new VueRouter({
	routes:[
	{path:'/login',component:login},
	{path:'/register',component:login}
	]
})
export deafault router