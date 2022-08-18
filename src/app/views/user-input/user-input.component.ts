import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

//controllers
import { GameController } from 'src/app/controllers/game/game-controller.service';
import { TriedCharsController } from 'src/app/controllers/tried-chars/tried-chars-controller.service';
import { SecretWordController } from 'src/app/controllers/secret-word/secret-word-controller.service';

//services
import { CustomValidatorsService } from 'src/app/services/custom-validators/custom-validators.service';



@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit, AfterViewInit {

  userInputFormControl!: FormControl;
  formControlWasSubmitted!: boolean;

  @Output('onCharSubmitted') submitCharSubject: Subject<string> = new Subject<string>();
  @Output('onResetRequest') resetSubject: Subject<void> = new Subject<void>();

  @ViewChild('userInputDOMElement') userInputDOMElement?: ElementRef;

  get moreThanOneCharWasTyped(): boolean {
    return this.userInputFormControl.hasError('maxlength');
  }

  get charIsntAlphaChar(): boolean {
    return this.userInputFormControl.hasError('pattern');
  }

  get charWasntInformed(): boolean {
    return this.userInputFormControl.hasError('required');
  }

  get charWasAlreadyTried(): boolean {
    return this.userInputFormControl.hasError('validateChar');
  }

  constructor(
    //controllers
    public gameController: GameController,
    public triedCharsController: TriedCharsController,
    private _secretWordService: SecretWordController,

    //services
    private _formBuilder: FormBuilder,
    private _customValidators: CustomValidatorsService,
  ) { }

  ngOnInit(): void {
    this._setFormGroup();
    this._secretWordService.wordHasBeenFound.subscribe(() => {
      this._setFormGroup();
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.userInputDOMElement?.nativeElement.focus();
    }, 0)
  }

  submitChar(): void {
    this.formControlWasSubmitted = true;
    if (this.userInputFormControl.valid) {
      let charWasSubmitted = this.triedCharsController.addChar(this.userInputFormControl.value);
      if (charWasSubmitted) {
        this.submitCharSubject.next(charWasSubmitted);
        this._setFormGroup();
        return;
      }
    }
  }

  private _setFormGroup(): void {
    this.formControlWasSubmitted = false;
    this.userInputFormControl = this._formBuilder.control(
      '',
      [Validators.required, Validators.maxLength(1), Validators.pattern('^[A-Za-zçÇ]*$'), this._customValidators.validateChar()],
    );
  }
}
