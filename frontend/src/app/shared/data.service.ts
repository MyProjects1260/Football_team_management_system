import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/joueurs');
  }

  ajouterjoueur(joueur){
    return this.httpClient.post('http://127.0.0.1:8000/api/ajouterjoueur',joueur);

  }

  supprimerjoueur(id){
  return this.httpClient.delete('http://127.0.0.1:8000/api/supprimerjoueur/'+id);
  }

  modifierjoueur(id,data){
    return this.httpClient.put('http://127.0.0.1:8000/api/modifierjoueur/'+id,data);
    }

  getJoueursById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/joueurs/'+id);

  }


}
