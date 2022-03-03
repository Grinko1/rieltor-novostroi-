<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Balcony;
use App\Models\Bathroom;
use App\Models\Build;
use App\Models\Decoration;
use App\Models\Facade;
use App\Models\Floor;
use App\Models\Resale;
use App\Models\Room;

class CreateFlatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flats', function (Blueprint $table) {
            $table->id();
            $table->string('area');
            $table->string('title');
            $table->text('desc');
            $table->string('square');
            $table->string('kitchenSquare');
            $table->unsignedBigInteger('price');
            $table->string('lift')->nullable();
            $table->unsignedBigInteger('yearOfBuild');
            $table->foreignIdFor(Balcony::class)->constrained();
            $table->foreignIdFor(Bathroom::class)->constrained();
            $table->foreignIdFor(Build::class)->constrained();
            $table->foreignIdFor(Decoration::class)->constrained();
            $table->foreignIdFor(Facade::class)->constrained();
            $table->foreignIdFor(Floor::class)->constrained();
            $table->foreignIdFor(Resale::class)->constrained();
            $table->foreignIdFor(Room::class)->constrained();
           
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flats');
    }
}
