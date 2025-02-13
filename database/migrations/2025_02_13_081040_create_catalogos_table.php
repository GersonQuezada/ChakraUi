<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('CATALOGOS', function (Blueprint $table) {
            $table->increments('ID');
            $table->string('VC_CODIGO', 100);
            $table->string('VC_NOMBRE', 100);
            $table->string('VC_DESCRIPCION', 200);
            $table->boolean('VC_ESTADO')->default(false);
            $table->foreignId('FK_USER_ID_crt')->constrained('users','id');
            $table->dateTime('DT_FECHA_CRT')->useCurrent();
            $table->foreignId('FK_USER_ID_upd')->constrained('users','id')->nullable();
            $table->dateTime('DT_FECHA_UPD')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('CATALOGOS');
    }
};
