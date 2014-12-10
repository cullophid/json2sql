var Query = require('../src/Query'),
	squel = require('squel'),
	chai = require('chai'),
	should = chai.should();

describe('Query.fields', function () {
	it('should accept an object with fields' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		json = {
			a: 1,
			b: 2,
			c: 3
		}
		Query.prototype.fields.call(dummy, json);
		dummy.query.toString().should.equal('SELECT a, b, c FROM table');

	});
	it('should accept an object with no' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		json = {
		}
		Query.prototype.fields.call(dummy, json);
		dummy.query.toString().should.equal('SELECT * FROM table');

	});
});
describe('Query.whereIn', function () {
	it('should accept a field and an array' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		array = [1, 2, 3, 4] 
		Query.prototype.where._whereIn.call(dummy, 'a', array);
		dummy.query.toString().should.equal('SELECT * FROM table WHERE (a IN (1, 2, 3, 4))');

	});
});
describe('Query.complexWhere', function () {
	it('should accept multiple filters' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
		},
		json = {
			gt : 5,
			lte : 9,
			ne : 7
		} 
		Query.prototype.where._complexWhere.call(dummy, 'a', json);
		dummy.query.toString().should.equal('SELECT * FROM table WHERE (a > 5) AND (a <= 9) AND (a != 7)');

	});
});
describe('Query.where', function () {
	it('should accept an object with different fields' ,function () {
		json = {
			where : {
				a: 1,
				b: [1, 2, 3],
				c: {
					gte : 3,
					lt : 10
				}
			},
			from : 'table'
		}
		new Query('select', json).toString().should.equal('SELECT * FROM table WHERE (a = 1) AND (b IN (1, 2, 3)) AND (c >= 3) AND (c < 10)');

	});
});

describe('Query.groupBy', function () {
	it('should accept an object with fields' ,function () {
		var dummy = {
			query : squel.select()
				.from('table')
				.field('a')
				.field('b')

		},
		json = 'a';
		Query.prototype.groupBy.call(dummy, json);
		dummy.query.toString().should.equal('SELECT a, b FROM table GROUP BY a');

	});
});

