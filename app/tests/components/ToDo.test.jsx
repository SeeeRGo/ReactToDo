var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {ToDo} from 'ToDo';

describe('ToDo', () => {
	it('should exist', () => {
		expect(ToDo).toExist();
	});

	it('should dispatch startToggleTodo action on click', () =>{
		var updates = {
			id: 0,
			text: 'txt',
			completed: true
		}
		var action = actions.startToggleTodo(updates.id, !updates.completed)
		var spy = expect.createSpy()
		var todo = TestUtils.renderIntoDocument(<ToDo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(action);
	})
});