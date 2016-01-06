var React = require('react');
var Nav = require('./nav');

var index =  React.createClass({
	render: function() {
		console.log('buf[index]');
		return (

			<div className="row">
				<Nav login={false} />
				<div className="col-lg-12">
					<h1>Hola Mundo</h1>
				</div>
			</div>
			);
	}
});

module.exports = index;