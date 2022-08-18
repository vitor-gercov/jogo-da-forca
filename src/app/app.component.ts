import { Component, OnInit } from '@angular/core';

//controllers
import { TriedCharsController } from './controllers/tried-chars/tried-chars-controller.service';
import { SecretWordController } from './controllers/secret-word/secret-word-controller.service';
import { GameController } from './controllers/game/game-controller.service';

//services
import { SnackbarService } from './services/snackbar/snackbar.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    //controllers
    public triedCharsController: TriedCharsController,
    public secretWordController: SecretWordController,
    private _gameController: GameController,

    //services
    public snackbarService: SnackbarService,
  ) { }

  ngOnInit(): void {
    this._gameController.startGame();
    this.secretWordController.wordHasBeenFound
      .subscribe(() => {
        this.snackbarService.show(`Parabéns, você ganhou!`, 'eba! :D');
        this._gameController.endGame('win');
      })
  }

  handleCharSubmitted(char: string): void {
    if (this.secretWordController.remainingChars == '') {
      this.secretWordController.wordHasBeenFound.next();
      return;
    }

    if (char == 'erro') {
      this.snackbarService.show(`Iih, letra errada!`, 'ok :(');
      return;
    }
    this.snackbarService.show(`Letra "${char}" inserida.`);
  }
}