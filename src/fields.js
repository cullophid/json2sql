'use strict';
module.exports = function (fields) {
	var i;
	if (!fields) {
		return this;
	}
	for (i in fields) {
		if (fields.hasOwnProperty(i)) {
			this.query.field(i);
		}
	}
	return this;
};

