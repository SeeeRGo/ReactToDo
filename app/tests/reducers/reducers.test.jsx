var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'text'
			}
			var res = reducers.searchTextReducer(df(''), df(action));
			expect(res).toEqual(action.searchText);
		})
	})

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',
				showCompleted: false
			};
			//var state = false
			var res = reducers.showCompletedReducer(df(action.showCompleted), df(action));
			expect(res).toBe(!action.showCompleted);
		});
	});

	describe('todoReducer', () => {
		it('should add todo', () => {
			var action = {
				type: 'ADD_TODO',
				text: 'myTodo'
			};
			var res = reducers.todoReducer(df([]), df(action));

			expect(res.length).toBe(1)
			expect(res[0].text).toBe(action.text);
		});
		it('should toggle completed status of todo', () => {
			var testState = [{
				id: 0,
				text: 'newTodo',
				completed: false,
				createdAt: moment().unix(),
				completedAt: undefined
			}, {
				id: 12,
				text: 'newerTodo',
				completed: true,
				createdAt: moment().unix(),
				completedAt: undefined
			}]
			var action = {
				type: 'TOGGLE_TODO',
				id: 0
			};
			var res = reducers.todoReducer(df(testState), df(action));

			expect(res[0].completed).toBe(true);
			expect(res[0].completedAt).toNotBe('undefined');
			expect(res.length).toBe(2);
		});

		it('should add todos', () => {
			var todos = [
			{
				id: 322,
				text: 'do it',
				completed: false,
				createdAt: 444,
				completedAt: 5000
			}
		];
			var action = {
				type: 'ADD_TODOS',
				todos
			}
			var res = reducers.todoReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);
		});
	});
});