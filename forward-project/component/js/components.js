;(function(exports){
	const header_template=`<header >		
			<h1 >todos</h1>
			<input class="new-todo"  placeholder="What needs to be done?"  v-model="newtodo" @keyup.enter="heanderNewtodo" @blur="heanderNewtodo" >
		</header>`
	const section_template=`<section class="main" v-show="todos.length">
				<input id="toggle-all" class="toggle-all" type="checkbox" v-model="toggleAll" @click="$emit('toggleAll')">
				<label for="toggle-all">Mark all as complete</label>
				<transition-group class="todo-list"  tag="ul"  enter-active-class="slideInRight" leave-active-class="fadeOutRight" appear>
					<li v-for="todo in todos" class="todo animated" :key="todo.id" :class="{completed: todo.completed, editing: editTodos === todo}">
						<div class="view">
							<input class="toggle" type="checkbox" v-model="todo.completed">
							<label @dblclick="editTodo(todo)" >{{todo.title}}</label>
							<button class="destroy" @click="$emit('removeTodos',todo)"></button>
						</div>
						<input class="edit" v-model="todo.title" @keyup.esc="cancleEdit(todo)" @keyup.enter="doneEdite(todo)"  @blur="doneEdite(todo)">
					</li>
				</transition-group>
		</section>`
	const footer_template=`<footer class="footer" v-show="todos.length">
				<span class="todo-count">
					<strong v-text='reminds'></strong> {{pularize('item',reminds)}} left
				</span>
				<ul class="filters">
					<li><a href="#/all" @click="$emit('filterText','all')" :class="{selected: filterText==='all'}">All</a></li>
					<li><a href="#/active"  @click="$emit('filterText','active')" :class="{selected: filterText==='active'}">Active</a></li>
					<li><a href="#/completed" @click="$emit('filterText','completed')" :class="{selected: filterText==='completed'}">Completed</a></li>
				</ul>
				<button class="clear-completed"> 
				</button>
			</footer>`
	exports.appheader={
		props:['todos'],
		data(){
			return({
				newtodo:''
			})
		},
		template:header_template,
		methods:{
			heanderNewtodo(){
				this.$emit('new-todos',this.newtodo)
				this.newtodo=''
			}
		}
	}
	exports.appSection={
		props:['todos','toggleAll'],
		template:section_template,
		data:function(){
		return({
			editTodos:null
		})},
		methods:{
			editTodo:function(todo){
				this.beforeEdite=todo.title 
				this.editTodos=todo
			},
			cancleEdit(todo){
				this.editTodos=null
				todo.title=this.beforeEdite

			},
			doneEdite(todo){
				this.editTodos=null
				this.$emit('doneEdite',todo)
			},

		}
}

	exports.appfooter={
		props:['todos','filterText','reminds'],
		template:footer_template,
		methods:{
			pularize:function(word,count){
				return word + (count ===1 ? '' : 's')
			}
		}
	}
})(window)
