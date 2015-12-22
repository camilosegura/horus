var React = require('react');
var Nav = require('./nav');
var Connection = require('../utils/connection');
var History = require('react-router').History;

var login = React.createClass({
	mixins: [History],

	getInitialState: function() {
		return {email: '', password: ''};
	},

	handleSubmit: function(e) {
		e.preventDefault();
		var data = {email: this.refs.email.value, password: this.refs.password.value};
		Connection(data, './login', 'GET', this.onSuccess);
	},

	onSuccess: function(data) {
		console.log('callback',data. this, login);
		this.history.pushState(null, '/main');
	},

	render: function() {
		console.log('login');
		return (
			<div className="row">
				<Nav />
				<div className="col-lg-6">
					<form onSubmit={this.handleSubmit}>
					  <div className="form-group">
					    <label htmlFor="email">Email address</label>
					    <input type="email" className="form-control" ref="email" id="email" placeholder="Email" required />
					  </div>
					  <div className="form-group">
					    <label htmlFor="password">Password</label>
					    <input type="password" className="form-control" ref="password" id="password" placeholder="Password" required />
					  </div>
					  <button type="submit" className="btn btn-primary">Ingresar</button>
					</form>
				</div>
			</div>
			);
	}
});

module.exports = login;