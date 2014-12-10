'use strict';
var target = require('../src/where'),
	squel = require('squel'),
	chai = require('chai'),
	should = chai.should();

describe('where._whereIn', function () {
	it('should accept a field and an array' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		array = [1, 2, 3, 4];
		target._whereIn.call(dummy, 'a', array);
		dummy.query.toString().should.equal('SELECT * FROM table WHERE (a IN (1, 2, 3, 4))');

	});
});

describe('where._complexWhere', function () {
	it('should accept multiple filters' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		json = {
			gt : 5,
			lte : 9,
			ne : 7
		};
		target._complexWhere.call(dummy, 'a', json);
		dummy.query.toString().should.equal('SELECT * FROM table WHERE (a > 5) AND (a <= 9) AND (a != 7)');

	});
});

describe('where', function () {
	it('should accept complex where clauses', function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		json = {
			a : 1,
			b : 'two',
			c : [1, 2, 3],
			d : {
				lt : 10,
				ne : 5
			}
		};
		target.call(dummy, json)
			.query
			.toString()
			.should
			.equal("SELECT * FROM table WHERE (a = 1) AND (b = 'two') AND (c IN (1, 2, 3)) AND (d < 10) AND (d != 5)");
	});
	it('should accept no where clause', function () {
		var dummy = {
			query : squel.select()
				.from('table')
		};
		target.call(dummy, undefined)
			.query
			.toString()
			.should
			.equal("SELECT * FROM table");
	});
});