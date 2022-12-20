import { TestBed } from '@angular/core/testing';

import { AnimatronicService } from './animatronic.service';

describe('AnimatronicService', () => {
  let service: AnimatronicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimatronicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
