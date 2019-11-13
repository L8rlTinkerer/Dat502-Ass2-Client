import { TestBed } from '@angular/core/testing';

import { RegisterSupervisorService } from './register-supervisor.service';

describe('RegisterSupervisorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterSupervisorService = TestBed.get(RegisterSupervisorService);
    expect(service).toBeTruthy();
  });
});
