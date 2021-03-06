var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

//var ToDoList = require('ToDoList');
import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';
var ToDoAPI = require('ToDoAPI');


var ToDoApp = React.createClass({	
	render: function() {
		return (
			<div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<ToDoSearch/>
							<ToDoList/>
							<AddToDo/>
						</div>
					</div>
				</div>
			</div>
			);
	}
});

module.exports = ToDoApp;