var React = require('react');
var ReactDOM = require('react-dom');
var history = require('history');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
//var routes = require('./routes');

var Index = require('./components/index');
var Login = require('./components/login');
var Logout = require('./components/logout');
var Main = require('./components/main');
var Tickets = require('./components/tickets');
var Edit = require('./components/edit');

ReactDOM.render(
  
  	<Router>
		<Route path="/" component={Index}/>
		<Route path="/login" component={Login}/>
		<Route path="/logout" component={Logout}/>
		<Route path="/main" component={Main}/>
		<Route path="/ticket/edit" component={Edit}/>
		<Route path="/ticket/sin-terminar" component={Tickets} action="./ticket/unfinished" />
		<Route path="/ticket/sin-entregar" component={Tickets} action="./ticket/undelivered" />
	</Router>
  ,
  document.getElementById('container')
);