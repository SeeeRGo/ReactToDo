var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');

var actions = require('actions')

var ToDo = React.createClass({	
	render: function(){
		var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
		var todoClassName = completed ? 'todo todo__completed' : 'todo'
		var renderDate = () => {
			var createdTimestamp = moment.unix(createdAt).format('MMMM DD, YYYY @ HH;)mm;)ss');
			var completedTimestamp = moment.unix(completedAt).format('MMMM DD, YYYY @ HH;)mm;)ss');
			var createdMessage = 'Created on ' + createdTimestamp;
			var completedMessage = 'Competed on ' + completedTimestamp;
			return completed ? completedMessage : createdMessage;
		};
		return (
			<div className={todoClassName} onClick={() => {
				//this.props.onToggle(id);
				dispatch(actions.toggleToDo(id));

			}}>
				<div><input type="checkbox" checked={completed}/></div>
				<div><p>{text}</p>
				<p className="todo__subtext">{renderDate()}</p></div>
			</div>
			)
	}
});

module.exports = connect()(ToDo);