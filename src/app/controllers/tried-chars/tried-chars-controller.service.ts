import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TriedCharsController {

  private _triedChars: string[] = [];

  addChar(char: string): string | null {
    let lowerChar: string = char.toLowerCase();
    if (this._triedChars.includes(lowerChar)) {
      return null;
    }
    this._triedChars.push(lowerChar);
    return lowerChar;
  }

  reset(): void {
    this._triedChars = [];
  }

  get triedCharacters(): string[] {
    return this._triedChars;
  }
}
