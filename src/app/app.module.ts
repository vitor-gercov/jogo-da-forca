import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

//ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//angular material
import { MatSnackBarModule } from '@angular/material/snack-bar';

//internal modules
import { UserInputModule } from './views/user-input/user-input.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFeedbackModule } from './views/user-feedback/user-feedback.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,

    //ng-bootstrap
    NgbModule,

    //angular material
    MatSnackBarModule,
    BrowserAnimationsModule,

    //internal modules
    UserInputModule,
    UserFeedbackModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
