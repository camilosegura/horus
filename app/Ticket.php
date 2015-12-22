<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{

	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['fecha_inicio', 
    						'fecha_entrega', 
    						'tiempo_estimado', 
    						'archivo',
    						'ubicacion',
    						'material',
    						'material_sum',
    						'abono',
    						'escala',
    						'notas',
    						'total'];
    //
    public function user()
	{
	    return $this->belongsTo('App\User');
	}
}
