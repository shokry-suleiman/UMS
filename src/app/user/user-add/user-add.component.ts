import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppErrorStateMatcher } from 'src/@resources/matchers/error-state-matcher';
import { AuthService } from 'src/@resources/services/auth/auth.service';
import { Global } from 'src/@core/global/global'
import { USER_TYPE } from 'src/@resources/enum/enum';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  matcher = new AppErrorStateMatcher();
  userForm: FormGroup = this.fb.group({
    username:['',Validators.required],
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required],
    userType:['', Validators.required]
  })
  hide:boolean = true;
  USER_TYPE = USER_TYPE;
  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router, private global: Global,
              public dialogRef: MatDialogRef<UserAddComponent>) { }

  ngOnInit(): void {
  }
  
  addUser(){
    console.log('this.user',this.userForm.getRawValue())
    this.dialogRef.close(this.userForm.getRawValue())
    // this.authService.login(this.loginForm.getRawValue()).subscribe((res:any) => { 
    //  localStorage.setItem('token',JSON.stringify(res.accessToken));
    //  localStorage.setItem('user',JSON.stringify(res.user))
    //  this.global.token = res.accessToken;
    //  this.global.user = res.user;
    //  this.router.navigate(['/users'])
    // })
  }

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get userType() {
    return this.userForm.get('userType');
  }

}
