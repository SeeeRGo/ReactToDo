import firebase, {firebaseRef} from 'app/firebase/index';
import moment from 'moment';

export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

export var addToDo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};
};

export var startAddTodos = (text) => {
	return (dispatch, getState) => {
		var todo = {
					text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: null
				};
		var todoRef = firebaseRef.child('todos').push(todo);

		return todoRef.then(() => {
			dispatch(addToDo({
				...todo,
				id: todoRef.key
			}))
		})
	};
};

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	}
}

export var updateToDo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	};
};

export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

export var startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		var todoRef = firebaseRef.child(`todos/${id}`);
		var updates = {
			completed,
			completedAt: completed ? moment().unix() : null
		}
		return todoRef.update(updates).then(() => {
			dispatch(updateToDo(id, updates));
		});
	};
}