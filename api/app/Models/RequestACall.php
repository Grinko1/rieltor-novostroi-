<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestACall extends Model
{
    use HasFactory;
    protected $guarded = false;
    protected $table = 'request_a_calls';
}
