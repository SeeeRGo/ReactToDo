var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDo = require('ToDo');

describe('ToDo', () => {
	it('should exist', () => {
		expect(ToDo).toExist();
	});

	it('should call prop with id onToggle', () =>{
		var todoData = {
			id: 0,
			text: 'txt',
			completed: true
		}
		var spy = expect.createSpy()
		var todo = TestUtils.renderIntoDocument(<ToDo {...todoData} onToggle={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalled();
	})
});