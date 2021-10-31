import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntrainementService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/entrainements');
  }

  ajouterentrainement(entrainement){
    return this.httpClient.post('http://127.0.0.1:8000/api/ajouterentrainement',entrainement);

  }

  supprimerentrainement(id){
  return this.httpClient.delete('http://127.0.0.1:8000/api/supprimerentrainement/'+id);
  }

  modifierentrainement(id,data){
    return this.httpClient.put('http://127.0.0.1:8000/api/modifierentrainement/'+id,data);
    }

  getEntrainementById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/entrainement/'+id);

  }
}
