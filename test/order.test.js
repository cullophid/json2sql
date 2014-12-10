'use strict';
var target = require('../src/order'),
	squel = require('squel'),
	chai = require('chai'),
	should = chai.should();

describe('orderBy', function () {
	it('should accept an object with fields' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		json = {
			a: true,
			b: false,
			c: true
		};
		target.call(dummy, json);
		dummy.query.toString().should.equal('SELECT * FROM table ORDER BY a ASC, b DESC, c ASC');

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
