var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});
	it('should exist', () => {
		expect(ToDoAPI).toExist();
	});

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var todos = [{
				id: 11,
				test: 'test all',
				completed: false
			}];
			ToDoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});
		it('should not set invalid todos array', () => {
			var badTodos = {a: 'b'};

			ToDoAPI.setTodos(badTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		});
	});

	describe('getTodos', () => {
		it('should return empty array for bad storage data', () => {
			var actualtodos = ToDoAPI.getTodos();
			expect(actualtodos).toEqual([]);
		});
		it('should return proper data for good storage data', () => {
			var todos = [{
				id: 11,
				test: 'test all',
				completed: false
			}];
			localStorage.setItem('todos',JSON.stringify(todos))
			var actualtodos = ToDoAPI.getTodos();
			expect(actualtodos).toEqual(todos);

		});
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