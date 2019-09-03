
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
const template=`<section  class="todoapp" v-cloak>
	<app-header @new-todos="handerNewTodos($event)"
	></app-header>
	<app-section 
	:todos="filterTodos"
	:toggleAll="toggleAll"
	@removeTodos="removeTodos($event)"
	@toggleAll="toggleAll = $event"
	@doneEdite="doneEdite($event)"></app-section>

	<app-footer 
	:todos="todos"
	:filterText="filterText"
	:reminds='reminds'
	@filterText="filterText = $event"
	></app-footer>
	</section>
	`
exports.app={
	template:template,
	data:function(){
		return(
		{
			todos:todoStorage.fetch(),
			filterText:"all"
		}
		)
	},
	watch:{
		todos:{
			deepth:true,
			handler:todoStorage.save
		}
	},
	components:{
		'app-header':appheader,
		'app-section':appSection,
		'app-footer':appfooter
	},
	methods:{
		handerNewTodos(newtodo){
			console.log(newtodo);
			var value=newtodo && newtodo.trim()
			if(!value){
				return
			}
			this.todos.push({
				id: this.todos.length ? this.todos[this.todos.length-1].id+1 : 1,
				completed: false,
				title:value
			})
			this.newtodo=''
		},
		removeTodos(todo){
			var index=this.todos.indexOf(todo)
			this.todos.splice(index,1)
		},
		doneEdite(todo){
			var parentTodo=this.todos[this.todos.indexOf(todo)]
			parentTodo.title=todo.title.trim()
			if(!parentTodo.title){
				this.removeTodos(parentTodo)
			}

		}
	},
	computed:{
		toggleAll:{
			get(){
				return this.todos.every(todo=>(todo.completed))
			},
			set(){
				var checked=!this.toggleAll
				this.todos.forEach(todo=>(
					todo.completed=checked

				))
			}
		},
		filterTodos:{
				get(){
					return filters[this.filterText](this.todos);
				}
			},
		reminds(){
			return filters.active(this.todos).length
		}
	}
}

})(window)