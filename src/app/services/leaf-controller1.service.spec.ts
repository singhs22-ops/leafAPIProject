import { TestBed } from '@angular/core/testing';

import { LeafController1Service } from './leaf-controller1.service';

describe('LeafController1Service', () => {
  let service: LeafController1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeafController1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
