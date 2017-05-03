var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
	it('should exist', () => {
		expect(ToDoApp).toExist();
	});

	it('should add todo to todos state', () => {
		var todoText = 'text';
		var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('should update status when checkbox is toggled', () =>{
		var todoData = {
			id: 0,
			text: 'text',
			completed: false,
			createdAt: undefined,
			completedAt: undefined
		};
		var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(0);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('should update status when checkbox is toggled from complete to incomplete', () =>{
		var todoData = {
			id: 0,
			text: 'text',
			completed: true,
			createdAt: 3,
			completedAt: undefined
		};
		var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(0);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
		expect(todoApp.state.todos[0].createdAt).toBe(3);
		expect(todoApp.state.todos[0].completedAt).toBeA('undefined');
	});
});