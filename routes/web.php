<?php

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/signin', function (){
    return Inertia::render('login');
});

Route::get('/signup', function (){
    return Inertia::render('signup');
});

Route::get('/banking', function () {
    return Inertia::render('layouts/banking');
});

Route::get('/banking2', function () {
    return Inertia::render('layouts/banking2');
});

Route::get('/sidebar', function () {
    return Inertia::render('layouts/sidebarLayout');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/banking', function () {
        return Inertia::render('layouts/banking');
    })->name('dashboard');
});
