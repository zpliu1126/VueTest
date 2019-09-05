const express=require("express")

var router=express.Router()

const todos=[
	{
		'id':1,
		'title':"吃饭"
	},
	{
		'id':2,
		'title':"睡觉"
	},{
		'id':3,
		'title':"打豆豆"
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