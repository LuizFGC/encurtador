<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Encurtador extends Model
{
    protected $table = 'links';

    protected $fillable = [
        'id',
        'slug',
        'destination_url',
        'created_at'
    ];

}
