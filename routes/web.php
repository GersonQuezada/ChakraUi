<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArchivoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login'); 
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/RegistroEquipo',function() {  return Inertia::render('Equipos/Formulario');});
    Route::get('/GeneraArchivo',function() {  return Inertia::render('ProcesoArchivoTXT/GenerarArchivoBNP');})->name('generaTXT.index');
    Route::post('/procesar-archivo', [ArchivoController::class, 'procesarArchivo'])->name('procesarArchivo');
});

require __DIR__.'/auth.php';
