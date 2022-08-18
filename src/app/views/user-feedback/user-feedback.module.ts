import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeedbackComponent } from './user-feedback.component';



@NgModule({
  declarations: [
    UserFeedbackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserFeedbackComponent,
  ]
})
export class UserFeedbackModule { }
