import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Joueur } from 'src/app/joueur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulterjoueurs',
  templateUrl: './consulterjoueurs.component.html',
  styleUrls: ['./consulterjoueurs.component.css']
})
export class ConsulterjoueursComponent implements OnInit {
  joueurs:any;
  joueur = new Joueur();
  success;

  constructor(private dataService:DataService, private route:Router) { }

  ngOnInit(): void {
    this.getjoueurs();
  }

  getjoueurs(){

this.dataService.getData().subscribe(res =>{
this.joueurs=res;
});
  }

  addjoueur(f){
    this.dataService.ajouterjoueur(this.joueur).subscribe(res =>{
      this.success='Joueur ajouté !';
      this.getjoueurs();

    })
  }

  deleteplayer(id){
    this.dataService.supprimerjoueur(id).subscribe(res=> {
      this.getjoueurs();
    })
  }

  updateplayer(f){

  }

  details(id){
    this.route.navigate(['/consulterjoueurs/details/'+id])
    console.log(id)
  }

}
