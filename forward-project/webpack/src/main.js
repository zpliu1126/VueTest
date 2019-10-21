//Vue 入口文件
import Vue from 'vue'

//加载Mint UI 组件
import {Header, Tabbar, TabItem, Swipe, SwipeItem, Toast} from 'mint-ui' 

import 'mint-ui/lib/style.css' //自动去node_modules下找

//加载mui样式
import './css/mui/mui.min.css'

//加载全部element-ui组件
import ElementUI from 'element-ui'
 Vue.use(ElementUI)
// 加载部分element组件
import 'element-ui/lib/theme-chalk/index.css'

/* import { Button, Select, Row } from 'element-ui'

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Row.name, Row); */

//注册全局组件
Vue.component(Header.name,Header)
Vue.component(Tabbar.name,Tabbar)
Vue.component(TabItem.name,TabItem)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VueRouter from 'vue-router'

//挂载路由
Vue.use(VueRouter)

//加载路由组件

import router from './routes.js'

//加载viu-resource组件
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root ='http://www.zpliublog.club:8080'

//app组件文件
import appEntry from './components/blog.vue'
//替换html模板x 
var template=`
<App></App>
`

//将app组件挂载到实例对象中
var app=new Vue({
	el:"#app",
	template:template,
	components: {
		'App':appEntry
	},
	router:router
})