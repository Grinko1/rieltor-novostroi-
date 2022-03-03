<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flat extends Model
{
    use HasFactory;
    protected $guarded = false;
    protected $table = 'flats';
    protected $with = ['balcony'];

    public function balcony()
    {
        return $this->belongsTo(Balcony::class);
    }

    public function bathroom()
    {
        return $this->belongsTo(Bathroom::class);
    }
    public function build()
    {
        return $this->belongsTo(Build::class);
    }

    public function decoration()
    {
        return $this->belongsTo(Decoration::class);
    }

    public function facade()
    {
        return $this->belongsTo(Facade::class);
    }

    public function floor()
    {
        return $this->belongsTo(Floor::class);
    }

    public function resale()
    {
        return $this->belongsTo(Resale::class);
    }

    public function room()
    {
        return $this->belongsTo(Room::class);
    }
    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
