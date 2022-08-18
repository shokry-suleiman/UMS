import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { USER_TYPE } from 'src/@resources/enum/enum';
import { AppErrorStateMatcher } from 'src/@resources/matchers/error-state-matcher';
import { AuthService } from 'src/@resources/services/auth/auth.service';
import { UserAddComponent } from '../user-add/user-add.component';
import { Global } from 'src/@core/global/global'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  matcher = new AppErrorStateMatcher();
  userForm: FormGroup = this.fb.group({
    id:['',Validators.required],
    username:['',Validators.required],
		email: ['', [Validators.required, Validators.email]],
		password: [''],
    userType:['', Validators.required]
  })
  hide:boolean = true;
  USER_TYPE = USER_TYPE;
  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router, private global: Global,
              public dialogRef: MatDialogRef<UserAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.patchUser();
  }
  
  patchUser() {
    this.userForm.patchValue({'id':this.data.user.id})
    this.userForm.patchValue({'username':this.data.user.username})
    this.userForm.patchValue({'email':this.data.user.email})
    this.userForm.patchValue({'userType':this.data.user.userType})

  }

  addUser(){
    console.log('this.user',this.userForm.getRawValue())
    if(this.userForm.getRawValue().password == '')
      this.dialogRef.close({...this.userForm.getRawValue(), password: this.data.user.password})
    else 
      this.dialogRef.close({...this.userForm.getRawValue()})
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
