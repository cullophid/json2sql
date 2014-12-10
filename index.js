var Query = require('./src/Query');

exports.select = function (json) {
	return new Query('select', json)
		.toString();
};