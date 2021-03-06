var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var ToDoApp = require('ToDoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var ToDoAPI = require('ToDoAPI');


store.dispatch(actions.startAddTodosIn())

//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
//App.css
require('style!css!sass!appStyles');

ReactDOM.render(
		<Provider store={store}>
			<ToDoApp/>
		</Provider>,
		document.getElementById("app")
	);

