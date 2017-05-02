var React = require('react');

var AddToDo = React.createClass({
	onSubmit: function(e){
		e.preventDefault();
		
		var newTodo = this.refs.todo.value;
		if(newTodo.length > 0){			
			this.refs.todo.value = '';
			this.props.onAddTodo(newTodo);
		}
	},
	render: function(){
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit}>
					<input ref="todo" type="text"/>
					<button>Add ToDo</button>
				</form>
			</div>
			);
	}
});

module.exports = AddToDo;