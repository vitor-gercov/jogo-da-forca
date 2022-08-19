import { AfterViewInit, Component, ElementRef, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

//controllers
import { GameController } from 'src/app/controllers/game/game-controller.service';
import { TriedCharsController } from 'src/app/controllers/tried-chars/tried-chars-controller.service';
import { SecretWordController } from 'src/app/controllers/secret-word/secret-word-controller.service';

//services
import { CustomValidatorsService } from 'src/app/services/custom-validators/custom-validators.service';

//ng-bootstrap
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit, AfterViewInit {

  tryCharFormControl!: FormControl;
  tryCharformControlWasSubmitted!: boolean;

  @Output('onCharSubmitted') submitCharSubject: Subject<string> = new Subject<string>();

  // @ViewChild('tryWordModal') tryWordModal?: TemplateRef<any>;
  // modalReference?: NgbModalRef;

  // tryWordFormControl?: FormControl;
  // tryWordFormControlWasSubmitted?: boolean;

  @ViewChild('tryCharInputDOMElement') tryCharInputDOMElement?: ElementRef;
  // @ViewChild('tryWordInputDOMElement') tryWordInputDOMElement?: ElementRef;

  get moreThanOneCharWasTyped(): boolean {
    return this.tryCharFormControl.hasError('maxlength');
  }

  get charIsntAlphaChar(): boolean {
    return this.tryCharFormControl.hasError('pattern');
  }

  get charWasntInformed(): boolean {
    return this.tryCharFormControl.hasError('required');
  }

  get charWasAlreadyTried(): boolean {
    return this.tryCharFormControl.hasError('validateChar');
  }

  constructor(
    //controllers
    public gameController: GameController,
    public triedCharsController: TriedCharsController,
    public secretWordController: SecretWordController,

    //services
    private _formBuilder: FormBuilder,
    private _customValidators: CustomValidatorsService,
    private _modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this._setFormControl();
    this.secretWordController.wordHasBeenFound.subscribe(() => {
      this._setFormControl();
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.tryCharInputDOMElement?.nativeElement.focus();
    }, 0)
  }

  submitChar(): void {
    this.tryCharformControlWasSubmitted = true;
    if (this.tryCharFormControl.valid) {
      this.submitCharSubject.next(this.tryCharFormControl.value.trim().toLowerCase());
      this._setFormControl();
      return;
    }
  }

  // openModal(): void {
  //   this._setTryWordFormControl();
  //   this.modalReference = this._modalService.open(this.tryWordModal)
  // setTimeout(() => {
  //   this.tryWordInputDOMElement?.nativeElement.focus();
  // }, 0);
  // }

  // tryWord(): void {
  //   this.tryWordFormControlWasSubmitted = true
  //   if (this.tryWordFormControl?.valid) {
  //     let result: 'win' | 'lose' =
  //       this.secretWordController.secretWord.value != this.tryWordFormControl.value.replace(/ +(?= )/g, '').trim().toLowerCase() ? 'lose' : 'win';
  //     this.modalReference?.close();
  //     this.gameController.endGame(result);
  //   }
  // }

  private _setFormControl(): void {
    this.tryCharformControlWasSubmitted = false;
    this.tryCharFormControl = this._formBuilder.control(
      '',
      [Validators.required, Validators.maxLength(1), Validators.pattern('^[A-Za-zçÇ]*$'), this._customValidators.validateChar()],
    );
  }

  // private _setTryWordFormControl(): void {
  //   this.tryWordFormControlWasSubmitted = false;
  //   this.tryWordFormControl = this._formBuilder.control(
  //     '',
  //     [Validators.required],
  //   );
  // }
}
