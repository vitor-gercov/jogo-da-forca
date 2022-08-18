import { TestBed } from '@angular/core/testing';

import { TriedCharsController } from './tried-chars-controller.service';

describe('TriedCharsControllerService', () => {
  let service: TriedCharsController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriedCharsController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
