//导入路由插件
import VueRouter from 'vue-router'

import login from './components/login.vue'
import register from './components/register.vue'

const router=new VueRouter({
	routes:[
	{path:'/login',component:login},
	{path:'/register',component:register}
	]
})

export default router