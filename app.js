const fs=require("fs")

const path= require("path")

const express=require("express")

const bodyParser=require("body-parser")

const app=express()

const test_router=require(path.join(__dirname,"router/test_router.js")) //加载路由文件 

app.use("/public",express.static(path.join(__dirname,"public"))) //静态资源目录

app.use("/node_modules",express.static(path.join(__dirname,"node_modules"))) //静态资源目录

app.use("/",express.static(path.join(__dirname,"forward-project"))) //前端页面目录


app.engine("html", require("express-art-template")) //配置模板引擎

app.set('views',path.join(__dirname,'template'));

app.use(bodyParser.urlencoded({extended:false})) //设置post请求解析

app.use(bodyParser.json()) //解析成json数据格式

app.use(test_router) //挂载路由

//配置错误处理中间件
app.use(function(err,req,rep,next){
	rep.status(200).send(err)
})

//404 中间件
app.use(function(req,rep){
	rep.render("404.html")
})

app.listen(8080,function(){
	console.log("server is start");
})