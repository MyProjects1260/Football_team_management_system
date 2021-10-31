import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService, User, } from '../shared/auth.service';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";

import { TokenService } from 'src/app/shared/token.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  public error = null;

  constructor( public router: Router, public fb: FormBuilder, public authService: AuthService ,
    private token: TokenService) {
    this.registerForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.min(8)]],
      password_confirmation: ['', Validators.required]
    })
  }

  onSubmit(){
    const formValue = this.registerForm.value;
    const newUser = new User(
       formValue['login'],
       formValue['password'],
       formValue['password_confirmation'],
    );
    this.authService.register(newUser).subscribe(
      result => { //console.log(result)
                  this.responseHandler(result); },
      error => this.handleError(error),
      () => {
        this.registerForm.reset()
        this.router.navigate(['login']);
      },
      );
   }

  handleError(error:any){
    this.error = error.error?.login;

   }

  ngOnInit(): void {
  }

  responseHandler(data: any){
    this.token.handleData(data.access_token);
  }
}
