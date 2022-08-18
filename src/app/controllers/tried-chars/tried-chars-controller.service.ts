import { Injectable } from '@angular/core';

//internal services
import { SecretWordController } from '../secret-word/secret-word-controller.service';



@Injectable({
  providedIn: 'root'
})
export class TriedCharsController {

  private _triedChars: string[] = [];

  constructor(
    private _secretWord: SecretWordController,
  ) { }

  addChar(char: string): string | null {

    let lowerChar: string = char.toLowerCase();
    if (this._triedChars.includes(lowerChar)) {
      return null;
    }
    this._triedChars.push(lowerChar);

    if (this._secretWord.secretWord.value.includes(lowerChar)) {
      this._secretWord.removeCharFromSecretWord(lowerChar);
      return lowerChar;
    }

    return 'erro'
  }

  reset(): void {
    this._triedChars = [];
  }

  get triedCharacters(): string[] {
    return this._triedChars;
  }

  get wrongCharactersTried(): string[] {
    return this._triedChars.filter(char => !this._secretWord.secretWord.value.includes(char));
  }
}
