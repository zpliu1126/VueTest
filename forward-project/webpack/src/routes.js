//导入路由插件
import VueRouter from 'vue-router'

import home from './components/home.vue'
import register from './components/register.vue'
import news from "./components/news.vue"
import blog from "./components/blog.vue"

const router=new VueRouter({
	routes:[{path:"",redirect:"/blog"},
	{path:'/home',component:home,},
	{path:'/register',component:register},
	{path:'/home/news',component:news},
	{path:'/blog',component:blog},
	]
})

export default router