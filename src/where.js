'use strict';
var filters = {
		gt : ' > ?',
		gte : ' >= ?',
		lt : ' < ?',
		lte : ' <= ?',
		ne : ' != ?'
	};

module.exports = function (where) {
	var i;
	if (!where) {
		return this;
	}
	for (i in where) {
		if (where.hasOwnProperty(i)) {
			if (Array.isArray(where[i])) {
				module.exports._whereIn.call(this, i, where[i]);
			} else if (typeof where[i] === 'object') {

				module.exports._complexWhere.call(this,i, where[i]);
			
			} else {

				this.query.where(i + ' = ?', where[i]);

			}
		}
	}
	return this;
};
// ### complex (object) where clauses
module.exports._complexWhere = function (column, json) {
	var i;
	if (!json || ! column) {
		return this;
	}

	for(i in json) {
		if (json.hasOwnProperty(i) && filters[i]) {
			this.query.where(column + filters[i], json[i]);
		}
	}
};

//### whereIn clause
module.exports._whereIn = function (column, array) {
	this.query.where(column + ' IN ?', array)
	return this;
};