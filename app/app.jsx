var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ToDoApp = require('ToDoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());	
});

store.dispatch(actions.addToDo('Kill myself'));
store.dispatch(actions.setSearchText('ill'));
store.dispatch(actions.toggleShowCompleted());
//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
//App.css
require('style!css!sass!appStyles');

ReactDOM.render(
		<ToDoApp/>,
		document.getElementById("app")
	);

