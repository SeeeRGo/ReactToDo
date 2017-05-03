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
	},
	filterTodos: function(todos, showCompleted, searchText){
		var filteredTodos = todos;

		//Filtes by showCompleted
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});
		//Filter by searchText
		filteredTodos = filteredTodos.filter((todo) => {
			if(searchText.length > 0) {
				return (todo.text.toLowerCase().indexOf(searchText) !== -1)
			} else return true;
		});
		//Filter non-completed first
		filteredTodos.sort((a,b) => {
			if(!a.completed && b.completed) {
				return -1
			} else if (a.completed && !b.completed) {
				return 1;
			} else return 0;
		});
		return filteredTodos;
	}
};