<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\JoueursController;
use App\Http\Controllers\EntrainementController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});

Route::get('/joueurs', [JoueursController::class, 'getJoueurs']);

Route::get('/joueurs/{id}',  [JoueursController::class, 'getJoueursById']);

Route::post('/ajouterjoueur', [JoueursController::class, 'Ajouterjoueur'] );

Route::put('/modifierjoueur/{id}', [JoueursController::class, 'Modifierjoueur'] );

Route::delete('/supprimerjoueur/{id}', [JoueursController::class, 'Supprimerjoueur'] );



Route::get('/entrainements', [EntrainementController::class, 'getEntrainements']);

Route::get('/entrainement/{id}',  [EntrainementController::class, 'getEntrainementById']);

Route::post('/ajouterentrainement', [EntrainementController::class, 'Ajouterentrainement'] );

Route::put('/modifierentrainement/{id}', [EntrainementController::class, 'Modifierentrainement'] );

Route::delete('/supprimerentrainement/{id}', [EntrainementController::class, 'Supprimerentrainement'] );



