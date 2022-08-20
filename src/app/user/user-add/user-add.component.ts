import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppErrorStateMatcher } from '../../../@resources/matchers/error-state-matcher';
import { AuthService } from '../../../@resources/services/auth/auth.service';
import { Global } from '../../../@core/global/global';
import { USER_TYPE } from '../../../@resources/enum/enum';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent {
  matcher = new AppErrorStateMatcher();
  userForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    userType: ['', Validators.required],
  });
  hide: boolean = true;
  USER_TYPE = USER_TYPE;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserAddComponent>
  ) {}

  addUser() {
    this.dialogRef.close(this.userForm.getRawValue());
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
