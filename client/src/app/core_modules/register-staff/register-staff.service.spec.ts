import { TestBed } from '@angular/core/testing';

import { RegisterStaffService } from './register-staff.service';

describe('RegisterStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterStaffService = TestBed.get(RegisterStaffService);
    expect(service).toBeTruthy();
  });
});
