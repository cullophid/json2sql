'use strict';
module.exports = function (groupBy) {
	if (!groupBy) {
		return this;
	}
	var i;
	if (!Array.isArray(groupBy)) {
		groupBy = [groupBy];
	}

	for (i = 0; i < groupBy.length; i += 1) {
		this.query.group(groupBy[i]);
	}
	return this;
}