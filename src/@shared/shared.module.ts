import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule
  ],
  exports:[
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class SharedModule { }
