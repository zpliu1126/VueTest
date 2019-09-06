const express=require("express")

var router=express.Router()

const todos=[
	{
		'id':1,
		'title':"吃饭",
		'content':'想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.',
		'icon':'http://www.zpliublog.club:8080/webpack/src/img/bg1.png'
	},
	{
		'id':2,
		'title':"睡觉",
		'content':'烤炉模式的城，到黄昏，如同打翻的调色盘一般.',
		'icon':'http://www.zpliublog.club:8080/webpack/src/img/bg3.jpeg'
	},{
		'id':3,
		'title':"打豆豆",
		'content':'静静的看这个世界，最后终于疯了！',
		'icon':'http://www.zpliublog.club:8080/webpack/src/img/bg2.jpg'
	},{
		'id':4,
		'title':"打豆豆",
		'content':'静静的看这个世界，最后终于疯了！',
		'icon':'http://www.zpliublog.club:8080/webpack/src/img/bg2.jpg'
	},{
		'id':5,
		'title':"打豆豆",
		'content':'静静的看这个世界，最后终于疯了！',
		'icon':'http://www.zpliublog.club:8080/webpack/src/img/bg2.jpg'
	},{
		'id':6,
		'title':"打豆豆",
		'content':'静静的看这个世界，最后终于疯了！',
		'icon':'http://www.zpliublog.club:8080/webpack/src/img/bg2.jpg'
	},{
		'id':7,
		'title':"打豆豆",
		'content':'静静的看这个世界，最后终于疯了！',
		'icon':'http://www.zpliublog.club:8080/webpack/src/img/bg2.jpg'
	},{
		'id':8,
		'title':"打豆豆",
		'content':'静静的看这个世界，最后终于疯了！',
		'icon':'http://www.zpliublog.club:8080/webpack/src/img/bg2.jpg'
	},{
		'id':9,
		'title':"打豆豆",
		'content':'静静的看这个世界，最后终于疯了！',
		'icon':'http://www.zpliublog.club:8080/webpack/src/img/bg2.jpg'
	},{
		'id':10,
		'title':"打豆豆",
		'content':'静静的看这个世界，最后终于疯了！',
		'icon':'http://www.zpliublog.club:8080/webpack/src/img/bg2.jpg'
	}
]
router
	.get("/API",(req,rep,next)=>{
		rep.header("Access-Control-Allow-Origin", "*"); //处理跨域请求
		rep.status(200).json(todos)
	}) //数据接口
	.post("/API",(req,rep,next)=>{
		var todo={
			title:req.body.title,
			id:todos[todos.length-1].id+1
		}
		todos.push(todo)
		rep.json(todos)
	})









module.exports=router