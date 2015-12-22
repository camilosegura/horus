var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Index = require('./components/index');
var Login = require('./components/login');

var routes = (
	<Router>
		<Route path="/" component={Index}/>
		<Route path="/login" component={Login}/>
	</Router>

);

module.exports = routes;