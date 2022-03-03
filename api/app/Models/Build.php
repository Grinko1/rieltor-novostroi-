<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Build extends Model
{
    use HasFactory;
    protected $guarded = false;
    protected $table = 'builds';

    public function flats()
    {
        return $this->hasMany(Flat::class);
    }
}
