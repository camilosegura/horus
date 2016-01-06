var React = require('react');
var Connection = require('../utils/connection');

var logout = React.createClass({

	componentDidMount: function() {		
		Connection({}, './logout', 'GET', this.onSuccess, this.props.history);
	},

	onSuccess: function(data) {
		this.props.history.pushState(null, '/login');
	},

	render: function() {
		return (<div></div>);
	}
});

module.exports = logout;