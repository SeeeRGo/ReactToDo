var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});
	it('should exist', () => {
		expect(ToDoAPI).toExist();
	});	

	describe('filterTodos', () => {
		var todos = [
		{
				id: 1,
				text: 'text1',
				completed: false
			}, {
				id: 2,
				text: 'text2',
				completed: true
			}, {
				id: 3,
				text: 't1ext3',
				completed: false
			}
			];
		it('should return all items is showCompleted is true', () => {
			var filteredTodos = ToDoAPI.filterTodos(todos, true, '');

			expect(filteredTodos.length).toBe(3);
		});
		it('should filter by showCompleted properly', () => {
			var filteredTodos = ToDoAPI.filterTodos(todos, false, '');

			expect(filteredTodos.length).toBe(2);
		});

		it('should sort todos to show uncompleted first', () => {
			var filteredTodos = ToDoAPI.filterTodos(todos, true, '');

			expect(filteredTodos[0].completed).toBe(false);
			expect(filteredTodos[1]).toEqual(todos[2]);
		});

		it('should show all todos when search field is empty', () => {
			var filteredTodos = ToDoAPI.filterTodos(todos, true, '');

			expect(filteredTodos.length).toBe(todos.length);
		});

		it('should properly filter by search text', () => {
			var filteredTodos = ToDoAPI.filterTodos(todos, true, 't1');

			expect(filteredTodos.length).toBe(2);
		});
	});
});