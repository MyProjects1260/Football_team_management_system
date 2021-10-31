<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Joueurs;

class JoueursController extends Controller
{
    public function getJoueurs(){
        return response()->json(Joueurs::all(),200);

    }

    public function getJoueursById($id){
        $joueur=Joueurs::find($id);
        if(is_null($joueur)){
            return response()->json(['message' => 'Joueur non trouvé'],404);
        }
        return response()->json($joueur::find($id),200);
    }

    public function Ajouterjoueur(Request $request){
        $joueur=Joueurs::create($request->all());
        return response($joueur,201);
    }

    public function Modifierjoueur(Request $request, $id){
        $joueur=Joueurs::find($id);
        if(is_null($joueur)){
            return response()->json(['message' => 'Joueur non trouvé'],404);
        }
        $joueur->update($request->all());
        return response($joueur,200);
    }

    public function Supprimerjoueur(Request $request, $id){
        $joueur=Joueurs::find($id);
        if(is_null($joueur)){
            return response()->json(['message' => 'Joueur non trouvé'],404);
    }
    $joueur->delete();
    return response()->json(null,204);
}
}
