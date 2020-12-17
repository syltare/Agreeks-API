import { TestBed } from '@angular/core/testing';

import { Postagem2Service } from './postagem2.service';

describe('Postagem2Service', () => {
  let service: Postagem2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Postagem2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
