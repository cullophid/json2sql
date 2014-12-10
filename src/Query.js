'use strict';
// # Query
// Basic query obejct used for building all objects
var squel = require('squel'),
	Query;

module.exports = Query = function (type, json) {
	this[type](json);
};

//## Select Query
Query.prototype.select = function (json) {
	this.query = squel.select();
	this.fields(json.fields);
	this.from(json.from);
	this.where(json.where);
	this.groupBy(json.groupBy);
	this.orderBy(json.orderBy);
	this.limit(json.limit);

};

//## from clause
Query.prototype.from = require('./from');

//## fields clause
Query.prototype.fields = require('./fields');

//## where clause
Query.prototype.where = require('./where');

//## group by clause
Query.prototype.groupBy = require('./group');

//## order by clause
Query.prototype.orderBy = require('./order');

//## limit clause
Query.prototype.limit = require('./limit');

// retun sql string;
Query.prototype.toString = function () {
	return this.query.toString();
};