import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsulterjoueursComponent } from './consulterjoueurs/consulterjoueurs.component';
import { ModifierjoueurComponent } from './modifierjoueur/modifierjoueur.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { ConsulterequipeComponent } from './consulterequipe/consulterequipe.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'consulterjoueurs/modifier/:id',component:ModifierjoueurComponent},
  {path:'consulterjoueurs/details/:id',component:DetailsComponent},
  {path:'consulterequipe',component:ConsulterequipeComponent},
  {path:'consulterjoueurs',component:ConsulterjoueursComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
