var $ = require('jquery');

module.exports = {
	setTodos: function (todos) {
		if($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
		}
		return todos;
	},
	getTodos: function () {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try{
			todos = JSON.parse(stringTodos);
		} catch(err) {
			alert(err);
		}

		return $.isArray(todos) ? todos : [];
	//			||| equivalensy
	//	if ($.isArray(todos)) {
	//		return todos;
	//	} else return [];
	}
}