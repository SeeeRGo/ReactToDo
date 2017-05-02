var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
	it('should exist', () => {
		expect(AddToDo).toExist();
	});

	it('should call onAddTodo if valid todo entered', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddToDo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todo.value = 'aaaa';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith('aaaa');
	});

	it('should not call onAddTodo if not valid todo entered', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddToDo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todo.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
});