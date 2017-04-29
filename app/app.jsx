var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
//App.css
require('style!css!sass!appStyles');

ReactDOM.render(
		<p>Boilerplate</p>,
		document.getElementById("app")
	);

