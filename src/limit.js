'use strict';
module.exports = function (limit) {
	if (!limit) {
		return this;
	}
	this.query.limit(limit);
};