import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur';
import { DataService } from '../shared/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  joueur=new Joueur();
  id:any;
  data:any;

  constructor(private dataService:DataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getjoueurbyid();
  }

  getjoueurbyid(){

    this.dataService.getJoueursById(this.id).subscribe(res =>{
      this.data=res;
    this.joueur=this.data;
    });
      }

}
