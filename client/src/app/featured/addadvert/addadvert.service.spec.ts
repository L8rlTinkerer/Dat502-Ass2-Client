import { TestBed } from '@angular/core/testing';

import { AddadvertService } from './addadvert.service';

describe('AddadvertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddadvertService = TestBed.get(AddadvertService);
    expect(service).toBeTruthy();
  });
});
