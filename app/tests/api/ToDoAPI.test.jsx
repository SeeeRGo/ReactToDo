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
})