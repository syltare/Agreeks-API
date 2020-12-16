import { TestBed } from '@angular/core/testing';

import { Categoria2Service } from './categoria2.service';

describe('Categoria2Service', () => {
  let service: Categoria2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categoria2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
