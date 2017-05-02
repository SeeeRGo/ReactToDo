var React = require('react');
var uuid = require('node-uuid');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');


var ToDoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: ToDoAPI.getTodos()
		};
	},
	componentDidUpdate(prevProps, prevState) {
		ToDoAPI.setTodos(this.state.todos);
	},
	handleAddTodo: function(newTodo){
		this.setState({
			todos: [
				...this.state.todos, 
				{
					id: uuid(), 
					text: newTodo,
					completed: false
				}
				]
		});
	},
	handleSearch: function(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},
	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});

		this.setState({todos: updatedTodos});
	},
	render: function() {
		var {todos} = this.state;
		return (
			<div>
				<ToDoSearch onSearch={this.handleSearch}/>
				<ToDoList todos={todos} onToggle={this.handleToggle}/>
				<AddToDo onAddTodo={this.handleAddTodo}/>
			</div>
			);
	}
});

module.exports = ToDoApp;