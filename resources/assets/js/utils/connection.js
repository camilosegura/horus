var $ = require('jquery');

var connection = function(data, endPoint, method, callback, history) {
	console.log('data', data);
	$.ajax({
		url: endPoint,
		method: method,
		dataType: 'json',
		data: data
	})
	.done(callback)
	.fail(function( jqXHR, textStatus, errorThrown ){
		console.log('error',jqXHR, textStatus, errorThrown);
		history.pushState(null, '/login');
	});
};

module.exports = connection;