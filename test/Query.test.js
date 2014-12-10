'use strict';
var Query = require('../src/Query'),
	squel = require('squel'),
	chai = require('chai'),
	should = chai.should();



describe('Query', function () {
	it('should accept a complx object' ,function () {
		var json = {
			from : 'table',
			fields : {'a' : false, 'sum(b)' : 'b', 'c' : false},
			where : {
				a : 1,
				b : {
					gte : 9
				}
			},
			groupBy : ['a'],
			orderBy : {
				a : true,
				b : false
			},
			limit : 100
		};
		new Query('select', json)
			.toString()
			.should
			.equal("SELECT a, sum(b) AS \"b\", c FROM table WHERE (a = 1) AND (b >= 9) GROUP BY a ORDER BY a ASC, b DESC LIMIT 100");

	});
});

