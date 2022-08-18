import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _matSnackbar: MatSnackBar,
  ) { }

  show(message: string, action: string = 'ok'): void {
    this._matSnackbar.open(message, action, {
      panelClass: 'snackbar',
      duration: 6000,
    });
  }
}
