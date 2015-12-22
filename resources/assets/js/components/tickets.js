var React = require('react');
var Connection = require('../utils/connection');

var tickets = React.createClass({

	render: function() {
		return (<h1>{this.props.route.action}</h1>);
	}

});

module.exports = tickets;