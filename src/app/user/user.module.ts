import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SharedModule } from 'src/@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NgDialogAnimationService } from 'ng-dialog-animation';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatDialogModule
  ],
  providers:[NgDialogAnimationService]

})
export class UserModule { }
