import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entrainement } from '../entrainement';
import { EntrainementService } from '../shared/entrainement.service';

@Component({
  selector: 'app-consulterequipe',
  templateUrl: './consulterequipe.component.html',
  styleUrls: ['./consulterequipe.component.css']
})
export class ConsulterequipeComponent implements OnInit {

  entrainements:any;
  entrainement = new Entrainement();
  success;

  constructor(private entrainementService:EntrainementService, private route:Router) { }

  ngOnInit(): void {
    this.getentrainements();
  }

  getentrainements(){

this.entrainementService.getData().subscribe(res =>{
this.entrainements=res;
});
  }

  addentrainement(f){
    this.entrainementService.ajouterentrainement(this.entrainement).subscribe(res =>{
      this.success='Entrainement ajouté !';
      this.getentrainements();

    })
  }

  deleteentrainement(id){
    this.entrainementService.supprimerentrainement(id).subscribe(res=> {
      this.getentrainements();
    })
  }


  details(id){
    this.route.navigate(['/consulterentrainement/details/'+id])
    console.log(id)
  }

}
