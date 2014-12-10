'use strict';
var target = require('../src/group'),
	squel = require('squel'),
	chai = require('chai'),
	should = chai.should();



describe('groupBy', function () {
	it('should accept an object with fields' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
				.field('a')
				.field('b')

		},
		json = 'a';
		target.call(dummy, json)
			.query
			.toString()
			.should
			.equal('SELECT a, b FROM table GROUP BY a');

	});
});
