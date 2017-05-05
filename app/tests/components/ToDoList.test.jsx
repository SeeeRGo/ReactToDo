var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//var ToDoList = require('ToDoList');
import {configure} from 'configureStore';
import ConnectedToDoList, {ToDoList} from 'ToDoList';
import ConnectedToDo, {ToDo} from 'ToDo';
//var ToDo = require('ToDo');

describe('ToDoList', () => {
	it('should exist', () => {
		expect(ToDoList).toExist();
	});

	it('should render one ToDo component for each ToDo item', () => {
		var todos = [{
			id: 1,
			text: 'Do something',
			completed: false,
			createdAt: 255,
			completedAt: undefined
		},{
			id: 2,
			text: 'Check mail',
			completed: false,
			createdAt: 755,
			completedAt: undefined
		}];
		var store = configure({todos: todos});
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedToDoList/>
			</Provider>
			);
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0];
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedToDo);

		expect(todosComponents.length).toBe(todos.length);
	});
	it('should render only message if there are no todos', () => {
		var todos = [];
		var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
		var $el = $(ReactDOM.findDOMNode(todoList));
		
		expect($el.find('.container__message').length).toBe(1);
	});
});