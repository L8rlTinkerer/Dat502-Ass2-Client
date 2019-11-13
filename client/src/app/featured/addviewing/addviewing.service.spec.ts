import { TestBed } from '@angular/core/testing';

import { AddviewingService } from './addviewing.service';

describe('AddviewingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddviewingService = TestBed.get(AddviewingService);
    expect(service).toBeTruthy();
  });
});
