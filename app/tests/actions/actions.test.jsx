var expect = require('expect');
var actions = require('actions');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase/';

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
	it('should generate search text action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some text'
		};
		var res = actions.setSearchText(action.searchText);
		expect(res).toEqual(action);
	});
	it('should generate add todo action', () => {
		var todo = {
			id: 132123,
			text: 'some text',
			completed: false,
			createdAt: 3443
		}
		var action = {
			type: 'ADD_TODO',
			todo
		};
		var res = actions.addToDo(action.todo);
		expect(res).toEqual(action);
	});

	it('should create todo and dispatch ADD_TODO', (done) => {
		const store = createMockStore({});
		const todoText = 'My todo item';

		store.dispatch(actions.startAddTodos(todoText)).then(() =>{
			const actions = store.getActions();
			expect(actions[0]).toInclude({type: 'ADD_TODO'});
			expect(actions[0].todo).toInclude({text: todoText});
			done();
		}).catch(done);
	})

	it('should generate update todo action', () => {
		var action = {
			type: 'UPDATE_TODO',
			id: 7,
			updates: {completed : false}
		};
		var res = actions.updateToDo(action.id, action.updates);
		expect(res).toEqual(action);
	});

	it('should generate toggle show completed action', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		};
		var res = actions.toggleShowCompleted();
		expect(res).toEqual(action);
	});

	it('should generate ADD_TODOS action', () => {
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
		var res = actions.addTodos(todos);
		expect(res).toEqual(action);
	});

	describe('tests with firebase todos', () => {
		var testTodoRef;

		beforeEach((done) => {
			var todosRef = firebaseRef.child('todos');

			todosRef.remove().then(() => {
				testTodoRef = firebaseRef.child('todos').push();
				return testTodoRef.set({
					text: 'Something to do',
					completed: false,
					createdAt: 322
					})
				})
				.then(() => done())
				.catch(done);
		});

		afterEach((done) => {
			testTodoRef.remove().then(() => done());
		});

		it('should dispatch startAddTodosIn action', (done) => {
			const store = createMockStore({});
			const action = actions.startAddTodosIn();

			store.dispatch(action).then(() => {
				const mockActions = store.getActions();

				expect(mockActions[0].type).toEqual('ADD_TODOS');
				expect(mockActions[0].todos.length).toEqual(1);
				expect(mockActions[0].todos[0].text).toEqual('Something to do');
				done();
			}, done)
		});

		it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
			const store = createMockStore({});
			const action = actions.startToggleTodo(testTodoRef.key, true);

			store.dispatch(action).then(() => {
				const mockActions = store.getActions();

				expect(mockActions[0]).toInclude({
					type: 'UPDATE_TODO',
					id: testTodoRef.key					 
				});
				expect(mockActions[0].updates).toInclude({completed: true});
				expect(mockActions[0].updates.completedAt).toExist();
				done();
			}, done)
		})
	})
});