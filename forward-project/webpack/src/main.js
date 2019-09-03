//Vue 入口文件
import Vue from 'vue'

import {Header, Tabbar, TabItem} from 'mint-ui' 

import 'mint-ui/lib/style.css' //自动去node_modules下找

//app组件文件
import appEntry from './components/app.vue'

Vue.component(Header.name,Header)
Vue.component(Tabbar.name,Tabbar)
Vue.component(TabItem.name,TabItem)

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
	}
})