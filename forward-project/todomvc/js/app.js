;(function(exports){

//钩子函数
var filters={
	all:function(todos){
		return todos;
	},
	active:function(todos){
		return todos.filter(item=>!item.completed)
	},
	completed:function(todos){
		return todos.filter(item=>item.completed)
	}
}
//本地化对象
var todoStorage={
	fetch:function(){
		return JSON.parse(exports.localStorage.getItem('todos-vuejs') || '[]');
	},
	save:function(todos){
		exports.localStorage.setItem('todos-vuejs',JSON.stringify(todos))
	}
}
// 注册全局指令
Vue.directive("focus",{
	inserted:function(el,bind){
		el.focus()
	}

})
Vue.directive("myself",{
	bind:function(el,binding){
		console.log(el);
	},
	inserted:function(el,binding){
		console.log(el.parentNode)
	},
	update:function(el,binding){
		console.log(binding.value)
	},
	compontUpdated:function(el,binding){
		console.log(binding.value)
	}
})
Vue.directive("todo-focus",{
	update:function(el,binding){
		if(binding.value){
			console.log(el);
			el.focus()

		}
	}
})
	exports.app=new Vue({
		el:".todoapp",
		data:{
			newTodos:'',
			todos:todoStorage.fetch(),
			editedTodo:null,
			filterText:"all"
		},
		watch:{
			todos:{
				deep:true, //对引用类型数据进行深度监视
				handler:todoStorage.save
			}
		},
		methods:{
			handleNewTodoKeyDown(){
				//input 按下回车时添加新的数据
				var value=this.newTodos && this.newTodos.trim()
				if(!value){
					return
				}
				this.todos.push(
					{
					id: this.todos.length ? this.todos[this.todos.length-1].id+1 : 1, //
					title:value,
					completed:false}
					)
				this.newTodos=''
			},

			handelToggleAll(e){
				var checked=e.srcElement.checked //获取全选的状态
				this.todos.forEach(item =>{
					item.completed=checked
				})
			},

			removeTodo(todo){
				//删除数据
				
				var index=this.todos.indexOf(todo);
				
				this.todos.splice(index,1);
			},

			editTodo(todo){
				this.beforeEditeTitle=todo.title
				this.editedTodo=todo
				
			},

			cancleEdite(todo){
				this.editedTodo = null;
				todo.title=this.beforeEditeTitle
			},

			doneEdite(todo){
				if(!this.editedTodo){
					return
				}
				this.editedTodo=null
				todo.title=todo.title.trim()
				if(!todo.title){
					this.removeTodo(todo)
				}
			},
			pluralize:function(word,count){
				return word + (count===1 ? '' : 's')
			}
		},
		computed:{
			reminds:function(){
				return filters.active(this.todos).length
			},
			toggleAllstat:{
				get(){
					//所有的都为true才为true
					return this.todos.every(todo=>(todo.completed))
				},
				set(){
				var checked=!this.toggleAllstat //
				this.todos.forEach(item =>{
					item.completed=checked
				})
				}
			},
			filterTodos:{
				get(){
					return filters[this.filterText](this.todos);
				}
			}
		}
	})
})(window)