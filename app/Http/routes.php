<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::get('login', 'AuthController@authenticate');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

Route::group(['middleware' => 'auth'], function() {
	Route::resource('ticket', 'TicketController');
	Route::get('ticket/finished', 'TicketController@finished');
	Route::get('ticket/unfinished', 'TicketController@unfinished');
	Route::get('ticket/deliverd', 'TicketController@deliverd');
	Route::get('ticket/undeliverd', 'TicketController@undeliverd');
});
