import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/@resources/services/auth/auth.service';
import { Global } from 'src/@core/global/global';
import { AppErrorStateMatcher } from 'src/@resources/matchers/error-state-matcher';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  matcher = new AppErrorStateMatcher();
  loginForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required],
  })
  hide:boolean = true;
  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router, private global: Global) { }

  ngOnInit(): void {
  }
  
  login(){
    this.authService.login(this.loginForm.getRawValue()).subscribe((res:any) => { 
     localStorage.setItem('token',JSON.stringify(res.accessToken));
     localStorage.setItem('user',JSON.stringify(res.user))
     this.global.token = res.accessToken;
     this.global.user = res.user;
     this.router.navigate(['/users'])
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
