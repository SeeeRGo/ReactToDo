var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id:2,
					text: 'Clean the yard'
				},
				{
					id:3,
					text: 'Take a shit'
				},
				{
					id:4,
					text: 'Kill myself'
				}
			]
		};
	},
	handleAddTodo: function(newTodo){
		alert(newTodo);
	},
	handleSearch: function(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},
	render: function() {
		var {todos} = this.state;
		return (
			<div>
				<ToDoSearch onSearch={this.handleSearch}/>
				<ToDoList todos={todos}/>
				<AddToDo onAddTodo={this.handleAddTodo}/>
			</div>
			);
	}
});

module.exports = ToDoApp;