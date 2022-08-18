import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

//models
import { SecretWord } from 'src/app/models/secret-word.model';



@Injectable({
  providedIn: 'root'
})
export class SecretWordController {

  wordHasBeenFound: Subject<void> = new Subject<void>();

  private _possibleWords: SecretWord[] = [
    // { value: 'a', help: 'a' }
    { value: 'michael jordan', help: 'jogador de basquete' },
    { value: 'tom brady', help: 'jogador de futebol americano' },
    { value: 'quadra', help: 'local de se praticar esportes' },
    { value: 'academia', help: 'local para se desenvolver o físico' },
    { value: 'doom', help: 'video game de tiro em primeira pessoa' },
    { value: 'thor', help: 'deus do trovão na mitologia nórdica' },
    { value: 'alan turing', help: 'pai da computação' },
    { value: 'nikola tesla', help: 'inventor do sistema de fornecimento de energia de corrente alternada' },
    { value: 'benjamin franklin', help: 'descobriu a energia elétrica' },
    { value: 'henry ford', help: 'maior empreendedor e engenheiro da história do automobilismo' },
    { value: 'les paul', help: 'modelo de guitarra' },
    { value: 'heavy metal', help: 'gênero de música "pesada"' },
    { value: 'jimi hendrix', help: 'um dos maiores guitarristas da história, se apresentou no "Woodstock"' },
    { value: 'john lennon', help: 'artista musical que se considerou mais famoso que Jesus' },
    { value: 'elvis presley', help: 'rei do rock' },
    { value: 'metallica', help: 'banda de metal dos anos 80' },
    { value: 'tatuagem', help: 'marcação no corpo permanente' },
  ]
  private _secretWord!: SecretWord;
  private _remainingChars!: string;

  get secretWord(): SecretWord {
    return this._secretWord;
  }

  get remainingChars(): string {
    return this._remainingChars;
  }

  setSecretWord(): SecretWord {
    const randomIndex: number = Math.floor(Math.random() * this._possibleWords.length);
    this._secretWord = this._possibleWords[randomIndex];
    this._remainingChars = this._secretWord.value.replace(/\s+/g, '').trim();
    return this._possibleWords[randomIndex];
  }

  removeCharFromSecretWord(char: string): void {
    this._remainingChars =
      this._remainingChars.split('').filter((remainingChar: string) => {
        return remainingChar != char.toLowerCase();
      }).join('');
  }
}