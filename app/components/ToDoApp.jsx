var React = require('React');
var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
	getInitialState: function() {
		return {
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
	render: function() {
		var {todos} = this.state;
		return (
			<div>
				<ToDoList todos={todos}/>
			</div>
			);
	}
});

module.exports = ToDoApp;