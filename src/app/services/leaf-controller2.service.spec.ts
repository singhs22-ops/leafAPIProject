import { TestBed } from '@angular/core/testing';

import { LeafController2Service } from './leaf-controller2.service';

describe('LeafController2Service', () => {
  let service: LeafController2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeafController2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
