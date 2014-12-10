'use strict';
var target = require('../src/fields'),
	squel = require('squel'),
	chai = require('chai'),
	should = chai.should();


describe('fields', function () {
	it('should accept an object with fields' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		json = {
			a: false,
			b: false,
			c: false
		};
		target.call(dummy, json);
		dummy.query.toString().should.equal('SELECT a, b, c FROM table');

	});
	it('should accept an object with fields and aliases' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		json = {
			'sum(a)': 'a',
			'avg(b)': 'b',
			'date(c)': 'c'
		};
		target.call(dummy, json);
		dummy.query.toString().should.equal('SELECT sum(a) AS "a", avg(b) AS "b", date(c) AS "c" FROM table');

	});
	it('should accept an object with no' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		json = {};
		target.call(dummy, json);
		dummy.query.toString().should.equal('SELECT * FROM table');

	});
});