import { Injectable } from '@angular/core';

//internal services
import { SecretWordController } from '../secret-word/secret-word-controller.service';
import { TriedCharsController } from '../tried-chars/tried-chars-controller.service';



@Injectable({
  providedIn: 'root'
})
export class GameController {

  // showTips: boolean = false;

  private _gameState: 'win' | 'lose' | 'playing' = 'playing';
  private _gameHasEnded: boolean = false;
  private _remainingAttempts!: number;

  get gameState(): 'win' | 'lose' | 'playing' {
    return this._gameState;
  }

  get gameHasEnded(): boolean {
    return this._gameHasEnded;
  }

  get remainingAttempts(): number {
    return this._remainingAttempts;
  }

  constructor(
    private _secretWordService: SecretWordController,
    private _triedCharsController: TriedCharsController,
  ) { }

  startGame(): void {
    this._gameHasEnded = false;
    this._gameState = 'playing';
    this._secretWordService.setSecretWord();
    this._setRemainingAttempts();
    this._triedCharsController.reset();
  }

  endGame(gameState: 'win' | 'lose'): void {
    this._gameHasEnded = true;
    this._gameState = gameState;
  }

  // restartGame(): void {
  //   this._gameHasEnded = false;
  //   this._gameState = 'playing';
  //   this._secretWordService.setSecretWord();
  //   this._setRemainingAttempts();
  //   this._triedCharsController.reset();
  // }

  removeAttempt(): void {
    if (this._remainingAttempts > 0) {
      this._remainingAttempts--;
      if (this._remainingAttempts == 0 && this._secretWordService.remainingChars != '') {
        this.endGame('lose');
      }
    }
  }

  private _setRemainingAttempts(): void {
    this._remainingAttempts = this._secretWordService.remainingChars.replace(/\s+/g, '').trim().length * 2;
  }
}
