'use strict';
var target = require('../src/limit'),
	squel = require('squel'),
	chai = require('chai'),
	should = chai.should();

describe('limit', function () {
	it('should accept number' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		limit = 5; 
		target.call(dummy, limit);
		dummy.query.toString().should.equal('SELECT * FROM table LIMIT 5');

	});
});
