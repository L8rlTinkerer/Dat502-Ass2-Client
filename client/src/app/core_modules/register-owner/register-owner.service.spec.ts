import { TestBed } from '@angular/core/testing';

import { RegisterOwnerService } from './register-owner.service';

describe('RegisterOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterOwnerService = TestBed.get(RegisterOwnerService);
    expect(service).toBeTruthy();
  });
});
