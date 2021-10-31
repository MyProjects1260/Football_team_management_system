import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joueur } from '../joueur';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifierjoueur',
  templateUrl: './modifierjoueur.component.html',
  styleUrls: ['./modifierjoueur.component.css']
})
export class ModifierjoueurComponent implements OnInit {
id:any;
success:any;
data:any;
joueur=new Joueur();
  constructor(private route:ActivatedRoute, private dataService:DataService, private routee:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getData();
  }

  updatejoueur(){
    this.dataService.modifierjoueur(this.id, this.joueur).subscribe(res=>{
    })
    this.success="joueur modifié ! "

  }

  getData(){
    this.dataService.getJoueursById(this.id).subscribe(res=> {
      this.data=res;
      this.joueur=this.data;
    })
  }

  onSubmit(){

  }

}
