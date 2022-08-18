import { TestBed } from '@angular/core/testing';

import { SecretWordController } from './secret-word-controller.service';

describe('SecretWordService', () => {
  let service: SecretWordController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretWordController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
