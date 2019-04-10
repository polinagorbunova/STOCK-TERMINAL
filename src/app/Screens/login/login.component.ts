import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm = this.fb.group( {
    email:['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:['', [Validators.required, Validators.minLength(5)]]
  })
  constructor(public auth: AuthService, private router: Router, private fb: FormBuilder ) {
  }

  ngOnInit() {
    // console.log(this.auth.credential);
    // if(this.auth.credential) {
    //   console.log(this.auth.credential);
    //   this.router.navigate(['/app'])
    // }

  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
  }

  goToRegistrationScreen() {
    this.router.navigate(['/registration'])
  }
}
