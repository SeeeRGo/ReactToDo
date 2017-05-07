var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddToDo} = require('AddToDo');
import * as actions from 'actions';

describe('AddToDo', () => {
	it('should exist', () => {
		expect(AddToDo).toExist();
	});

	it('should dispatch ADD_TODO if valid todoText entered', () => {
		var spy = expect.createSpy();
		var action = actions.startAddTodos('new toDO');
		var addTodo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todo.value = 'new toDO';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should not dispatch ADD_TODO if not valid todoText entered', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todo.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
});