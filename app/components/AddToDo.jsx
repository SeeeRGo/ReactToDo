var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddToDo = React.createClass({
	onSubmit: function(e){
		e.preventDefault();
		
		var {dispatch} = this.props;
		var newTodo = this.refs.todo.value;
		if(newTodo.length > 0){			
			this.refs.todo.value = '';
			//this.props.onAddTodo(newTodo);
			dispatch(actions.addToDo(newTodo));
		} else {
			this.refs.todo.focus()
		}
	},
	render: function(){
		return (
			<div className="container__footer">
				<form ref="form" onSubmit={this.onSubmit}>
					<input ref="todo" type="text"/>
					<button className="button expanded">Add ToDo</button>
				</form>
			</div>
			);
	}
});

export default connect()(AddToDo);