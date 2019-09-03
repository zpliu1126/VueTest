const express=require("express")

var router=express.Router()

const todos=[
	{
		'id':1,
		'title':"吃饭"
	},
	{
		'id':2,
		'title':"吃饭2"
	},
]
router
	.get("/API",(req,rep,next)=>{
		rep.json(todos)
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