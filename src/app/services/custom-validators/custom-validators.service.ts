import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//controllers
import { TriedCharsController } from '../../controllers/tried-chars/tried-chars-controller.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor(
    private _triedCharsController: TriedCharsController
  ) { }

  validateChar(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this._triedCharsController.triedCharacters.includes(control.value)) {
        return { validateChar: true };
      }
      return null;
    }
  }
}
