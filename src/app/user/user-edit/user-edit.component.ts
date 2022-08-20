import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { USER_TYPE } from '../../../@resources/enum/enum';
import { AppErrorStateMatcher } from '../../../@resources/matchers/error-state-matcher';
import { UserAddComponent } from '../user-add/user-add.component';
import { Global } from '../../../@core/global/global';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  matcher = new AppErrorStateMatcher();
  userForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [''],
    userType: ['', Validators.required],
  });
  hide: boolean = true;
  USER_TYPE = USER_TYPE;
  constructor(
    private fb: FormBuilder,
    public global: Global,
    public dialogRef: MatDialogRef<UserAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.patchUser();
  }

  patchUser() {
    this.userForm.patchValue({ id: this.data?.user?.id });
    this.userForm.patchValue({ username: this.data?.user?.username });
    this.userForm.patchValue({ email: this.data?.user?.email });
    this.userForm.patchValue({ userType: this.data?.user?.userType });
  }

  addUser() {
    console.log('this.user', this.userForm.getRawValue());
    if (this.userForm.getRawValue().password == '')
      this.dialogRef.close({
        ...this.userForm.getRawValue(),
        password: this.data.user.password,
      });
    else this.dialogRef.close({ ...this.userForm.getRawValue() });
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
