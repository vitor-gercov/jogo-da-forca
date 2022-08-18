import { TestBed } from '@angular/core/testing';

import { GameController } from './game-controller.service';

describe('GameControllerService', () => {
  let service: GameController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
