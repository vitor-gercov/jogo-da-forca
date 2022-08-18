import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInputComponent } from './user-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserInputComponent
  ]
})
export class UserInputModule { }
