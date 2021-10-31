<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entrainement;


class EntrainementController extends Controller
{
    public function getEntrainements(){
        return response()->json(Entrainement::all(),200);

    }

    public function getEntrainementById($id){
        $entrainement=Entrainement::find($id);
        if(is_null($entrainement)){
            return response()->json(['message' => 'Entrainement non trouvé'],404);
        }
        return response()->json($entrainement::find($id),200);
    }

    public function Ajouterentrainement(Request $request){
        $entrainement=Entrainement::create($request->all());
        return response($entrainement,201);
    }

    public function Modifierentrainement(Request $request, $id){
        $entrainement=Entrainement::find($id);
        if(is_null($entrainement)){
            return response()->json(['message' => 'Entrainement non trouvé'],404);
        }
        $entrainement->update($request->all());
        return response($entrainement,200);
    }

    public function Supprimerentrainement(Request $request, $id){
        $entrainement=Entrainement::find($id);
        if(is_null($entrainement)){
            return response()->json(['message' => 'Entrainement non trouvé'],404);
    }
    $entrainement->delete();
    return response()->json(null,204);
}
}
