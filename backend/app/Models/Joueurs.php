<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Joueurs extends Model
{
    use HasFactory;
    public $timestamps=false;

    protected $fillable=['nom','prenom','age','email','poste','num_maillot','nb_match',
    'nb_but_marque','nb_passe_dec','nb_but_concede','image'];
}
