<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aguaabast extends Model
{
    protected $table = 'aguaabastecimiento';
    protected $fillable = ['nombre'];

    public function detalle_vivienda()
    {
        return $this->hasMany('App\Detalle_vivienda');
    }
}
