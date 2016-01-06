var React = require('react');
var Nav = require('./nav');
var Connection = require('../utils/connection');

var ticket = React.createClass({
	getInitialState: function() {
		return {
			ticket: {},
			user: {}
		};
	},
	componentDidMount: function() {
		
		this.props.location.query.fecha_inicio = this.props.location.query.fecha_inicio.replace(/ /, 'T');
		this.props.location.query.fecha_entrega = this.props.location.query.fecha_entrega.replace(/ /, 'T');
		
		this.props.location.query.terminado = (this.props.location.query.terminado == '0') ? false : true;
		this.props.location.query.entregado = (this.props.location.query.entregado == '0') ? false : true;
		
		this.setState({
	          ticket: this.props.location.query,
	          user: this.props.location.query.user
	        });

	},

	toggleChangeE: function() {
		this.state.ticket.entregado = !this.state.ticket.entregado;
		this.setState({
			ticket: this.state.ticket
		});
	},

	toggleChangeT: function() {
		this.state.ticket.terminado = !this.state.ticket.terminado;
		this.setState({
			ticket: this.state.ticket
		});
	},

	handleSubmit: function(e) {
		e.preventDefault();
		console.log(this.refs);


		var data = {
			id: this.refs.id.value,
			abono: this.refs.abono.value,
			archivo: this.refs.archivo.value,
			email: this.refs.email.value,
			entregado: (this.refs.entregado.checked == true) ? 1 : 0,
			escala: this.refs.escala.value,
			fecha_entrega: this.refs.fecha_entrega.value,
			fecha_inicio: this.refs.fecha_inicio.value,
			material: this.refs.material.value,
			material_sum: this.refs.material_sum.value,
			name: this.refs.name.value,
			notas: this.refs.notas.value,
			telephone: this.refs.telephone.value,
			terminado: (this.refs.terminado.checked == true) ? 1 : 0,
			tiempo_estimado: this.refs.tiempo_estimado.value,
			total: this.refs.total.value,
			ubicacion: this.refs.ubicacion.value
		};

		Connection(data, './ticket/' + this.refs.id.value, 'PUT', this.onSuccess, this.props.history);
	},

	onSuccess: function(data) {
		console.log(data);
	},

	render: function() {
		return (
			<div className="row">
				<div className="col-lg-12">
					<Nav login={true} />
					<form className="form-horizontal" onSubmit={this.handleSubmit}>
					  <div className="form-group col-lg-6">
					    <label htmlFor="name" className="col-lg-4 control-label">Nombre</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="name" value={this.state.user.name} placeholder="Name" disabled />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="email" className="col-lg-4 control-label">Correo</label>
					    <div className="col-lg-8">
					      <input type="email" className="form-control" ref="email" value={this.state.user.email} placeholder="Correo" disabled />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="telephone" className="col-lg-4 control-label">Teléfono</label>
					    <div className="col-lg-8">
					      <input type="tel" className="form-control" ref="telephone" value={this.state.user.telephone} placeholder="Teléfono" disabled />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="fecha_inicio" className="col-lg-4 control-label">Fecha Inicio</label>
					    <div className="col-lg-8">
					      <input type="datetime-local" className="form-control" ref="fecha_inicio" value={this.state.ticket.fecha_inicio} placeholder="Fecha Inicio" disabled />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="tiempo_estimado" className="col-lg-4 control-label">Tiempo Estimado</label>
					    <div className="col-lg-8">
					      <input type="time" className="form-control" ref="tiempo_estimado" value={this.state.ticket.tiempo_estimado} placeholder="Tiempo Estimado" disabled />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="fecha_entrega" className="col-lg-4 control-label">Fecha Entrega</label>
					    <div className="col-lg-8">
					      <input type="datetime-local" className="form-control" ref="fecha_entrega" value={this.state.ticket.fecha_entrega} placeholder="Fecha Entrega" disabled />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="archivo" className="col-lg-4 control-label">Nombre Archivo</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="archivo" value={this.state.ticket.archivo} placeholder="Nombre Archivo" disabled />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="ubicacion" className="col-lg-4 control-label">Ubicación</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="ubicacion" value={this.state.ticket.ubicacion} placeholder="Ubicación" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="material" className="col-lg-4 control-label">Material</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="material" value={this.state.ticket.material} placeholder="Material" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="material_sum" className="col-lg-4 control-label">Material Suma</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="material_sum" value={this.state.ticket.material_sum} placeholder="Material Suma" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="abono" className="col-lg-4 control-label">Abono</label>
					    <div className="col-lg-8">
					      <input type="number" className="form-control" ref="abono" value={this.state.ticket.abono} placeholder="Abono" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="escala" className="col-lg-4 control-label">Escala</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="escala" value={this.state.ticket.escala} placeholder="Escala" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="notas" className="col-lg-4 control-label">Notas</label>
					    <div className="col-lg-8">
					      <textarea className="form-control" ref="notas" value={this.state.ticket.notas} placeholder="Notas" ></textarea>
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <div className="col-sm-offset-2 col-lg-8">
					      <div className="checkbox">
					        <label>
					          <input type="checkbox" ref="terminado" checked={this.state.ticket.terminado} onChange={this.toggleChangeT} /> Terminado
					        </label>
					      </div>
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <div className="col-sm-offset-2 col-lg-8">
					      <div className="checkbox">
					        <label>
					          <input type="checkbox" ref="entregado" checked={this.state.ticket.entregado} onChange={this.toggleChangeE} /> Entregado
					        </label>
					      </div>
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="total" className="col-lg-4 control-label">Valor Total</label>
					    <div className="col-lg-8">
					      <input type="number" className="form-control" ref="total" value={this.state.ticket.total} placeholder="Valor Total" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <div className="col-sm-offset-2 col-lg-8">
					      <button type="submit" className="btn btn-primary">Actualizar</button>
					      <input type="hidden" ref="id" value={this.state.ticket.id} />
					    </div>
					  </div>
					</form>
				</div>
			</div>
			);
	}

});

module.exports = ticket;