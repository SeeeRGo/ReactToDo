var $ = require('jquery');

module.exports = {
	
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