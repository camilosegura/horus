var React = require('react');
var Nav = require('./nav');
var Connection = require('../utils/connection');

var tickets = React.createClass({
	getInitialState: function() {
		return {
			tickets: []
		};
	},
	componentDidMount: function() {
		Connection({}, this.props.route.action, 'GET', this.onSuccess, this.props.history);
	},

	onSuccess: function(data){
		console.log('onSuccess', data);
		if (this.isMounted()) {
	        this.setState({
	          tickets: data
	        });
	     }
	},

	handleEdit: function(ticket) {
		console.log(ticket);
		this.props.history.pushState(null, '/ticket/edit', ticket);
	},

	render: function() {
		let _this = this; 
		return (<div className="row">
					<Nav login={true} />
					<div className="col-lg-12">
						<table className="table table-bordered table-hover">
							<tbody>
				            {this.state.tickets.map(function(data, i) {
				                return (<tr key={data.id}>
				                	<td>{data.fecha_inicio}</td>
				                	<td>{data.user.name}</td>
				                	<td>{data.archivo}</td>
				                	<td>{data.ubicacion}</td>
				                	<td><button className="btn btn-primary" onClick={_this.handleEdit.bind(_this, data)}>Editar</button></td>
				                	</tr>)
				            })}
				            </tbody>
			            </table>
			        </div>
		        </div>
		        );
	}

});

module.exports = tickets;