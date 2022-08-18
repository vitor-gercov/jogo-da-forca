import { Component, Input } from '@angular/core';

//controllers
import { GameController } from 'src/app/controllers/game/game-controller.service';
import { TriedCharsController } from 'src/app/controllers/tried-chars/tried-chars-controller.service';

//models
import { SecretWord } from 'src/app/models/secret-word.entity';



@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.scss']
})
export class UserFeedbackComponent {

  @Input() secretWord!: SecretWord

  constructor(
    public gameController: GameController,
    public triedCharsController: TriedCharsController,
  ) { }
}
