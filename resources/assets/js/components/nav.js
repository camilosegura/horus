var React = require('react');
var Link = require('react-router').Link;

var nav = React.createClass({
	render: function() {
		return (
	<nav className="navbar navbar-default">
	  <div className="container-fluid">
	    
	    <div className="navbar-header">
	      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false">
	        <span className="sr-only">Toggle navigation</span>
	        <span className="icon-bar"></span>
	        <span className="icon-bar"></span>
	        <span className="icon-bar"></span>
	      </button>
	      <a className="navbar-brand" href="#">Impresión</a>
	    </div>

	    
	    <div className="collapse navbar-collapse" >
	      <ul className="nav navbar-nav">
	        <li className="active"><Link to="/login">Ingresar</Link></li>
	        <li className="active"><Link to="/ticket/sin-terminar">Sin Terminar</Link></li>
	        <li className="active"><Link to="/ticket/sin-entregar">Sin Entregar</Link></li>
	      </ul>
	      <ul className="nav navbar-nav navbar-right">
	        <li><Link to="/logout">Salir</Link></li>
	      </ul>
	    </div>
	  </div>
	</nav>
	);
	}
});

module.exports = nav;
