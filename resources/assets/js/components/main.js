var React = require('react');
var Nav = require('./nav');
var Connection = require('../utils/connection');

var main = React.createClass({
	
	handleSubmit: function(e) {
		e.preventDefault();
		console.log('cookie', localStorage.getItem('XSRF-TOKEN'));
		var data = {
			abono: this.refs.abono.value,
			archivo: this.refs.archivo.value,
			email: this.refs.email.value,
			entregado: this.refs.entregado.checked,
			escala: this.refs.escala.value,
			fecha_entrega: this.refs.fecha_entrega.value,
			fecha_inicio: this.refs.fecha_inicio.value,
			material: this.refs.material.value,
			material_sum: this.refs.material_sum.value,
			name: this.refs.name.value,
			notas: this.refs.notas.value,
			telephone: this.refs.telephone.value,
			terminado: this.refs.terminado.checked,
			tiempo_estimado: this.refs.tiempo_estimado.value,
			total: this.refs.total.value,
			ubicacion: this.refs.ubicacion.value
		};

		Connection(data, './ticket', 'POST', this.onSuccess);
	},

	onSuccess: function(data) {

	},

	render: function() {
		return (
			<div className="row">
				<div className="col-lg-12">
					<Nav />
					<form className="form-horizontal" onSubmit={this.handleSubmit}>
					  <div className="form-group col-lg-6">
					    <label htmlFor="name" className="col-lg-4 control-label">Nombre</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="name" placeholder="Name" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="email" className="col-lg-4 control-label">Correo</label>
					    <div className="col-lg-8">
					      <input type="email" className="form-control" ref="email" placeholder="Correo" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="telephone" className="col-lg-4 control-label">Teléfono</label>
					    <div className="col-lg-8">
					      <input type="tel" className="form-control" ref="telephone" placeholder="Teléfono" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="fecha_inicio" className="col-lg-4 control-label">Fecha Inicio</label>
					    <div className="col-lg-8">
					      <input type="datetime-local" className="form-control" ref="fecha_inicio" placeholder="Fecha Inicio" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="tiempo_estimado" className="col-lg-4 control-label">Tiempo Estimado</label>
					    <div className="col-lg-8">
					      <input type="time" className="form-control" ref="tiempo_estimado" placeholder="Tiempo Estimado" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="fecha_entrega" className="col-lg-4 control-label">Fecha Entrega</label>
					    <div className="col-lg-8">
					      <input type="datetime-local" className="form-control" ref="fecha_entrega" placeholder="Fecha Entrega" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="archivo" className="col-lg-4 control-label">Nombre Archivo</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="archivo" placeholder="Nombre Archivo" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="ubicacion" className="col-lg-4 control-label">Ubicación</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="ubicacion" placeholder="Ubicación" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="material" className="col-lg-4 control-label">Material</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="material" placeholder="Material" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="material_sum" className="col-lg-4 control-label">Material Suma</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="material_sum" placeholder="Material Suma" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="abono" className="col-lg-4 control-label">Abono</label>
					    <div className="col-lg-8">
					      <input type="number" className="form-control" ref="abono" placeholder="Abono" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="escala" className="col-lg-4 control-label">Escala</label>
					    <div className="col-lg-8">
					      <input type="text" className="form-control" ref="escala" placeholder="Escala" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="notas" className="col-lg-4 control-label">Notas</label>
					    <div className="col-lg-8">
					      <textarea className="form-control" ref="notas" placeholder="Notas" ></textarea>
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <div className="col-sm-offset-2 col-lg-8">
					      <div className="checkbox">
					        <label>
					          <input type="checkbox" ref="terminado" /> Terminado
					        </label>
					      </div>
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <div className="col-sm-offset-2 col-lg-8">
					      <div className="checkbox">
					        <label>
					          <input type="checkbox" ref="entregado" /> Entregado
					        </label>
					      </div>
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <label htmlFor="total" className="col-lg-4 control-label">Valor Total</label>
					    <div className="col-lg-8">
					      <input type="number" className="form-control" ref="total" placeholder="Valor Total" />
					    </div>
					  </div>
					  <div className="form-group col-lg-6">
					    <div className="col-sm-offset-2 col-lg-8">
					      <button type="submit" className="btn btn-primary">Crear</button>
					    </div>
					  </div>
					</form>
				</div>
			</div>
			);
	}
});

module.exports = main;