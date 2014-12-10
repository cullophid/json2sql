'use strict';
module.exports = function (json) {
	var i;

	if (!json) {
		return this;
	}
	if (typeof json !== 'object') {
		throw new Error('orderBy must be a json object');
	}

	for (i in json) {
		if (json.hasOwnProperty(i)) {
			this.query.order(i, json[i]);
		}
	}

};