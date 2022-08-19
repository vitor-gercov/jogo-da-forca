import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//declarated component
import { UserInputComponent } from './user-input.component';



@NgModule({
  declarations: [
    UserInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserInputComponent
  ]
})
export class UserInputModule { }
