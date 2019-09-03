const path=require("path")

const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={	
	mode:'development',
	entry: path.join(__dirname,"src/main.js"),

	output:{
		path:path.join(__dirname,"dist"),
		filename:"bundle.js"
	},
	devServer:{
		port:8081,
		host:'0.0.0.0',
		disableHostCheck: true,
		contentBase:path.join(__dirname,"/"),
		hot:true
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
				{loader:'vue-style-loader'},
				{loader:'css-loader'}
				]
			},
			{test:/\.(jpg|png|gif|jpeg)$/,use: 'url-loader?limit=102400&name=[name].[ext]'},
			{test:/\.vue$/,use:'vue-loader'},
			{test:/\.js$/,use:'babel-loader'}
		]
	},
	plugins:[
		new VueLoaderPlugin()
	],
	resolve:{
		alias:{
			vue$:"vue/dist/vue.js"
		}
	}
}