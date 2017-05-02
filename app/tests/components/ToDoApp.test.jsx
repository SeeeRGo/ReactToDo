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
	});

	it('should update status when checkbox is toggled', () =>{
		var todoData = {
			id: 0,
			text: 'text',
			completed: false
		};
		var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(0);
		expect(todoApp.state.todos[0].completed).toBe(true);
	});
});