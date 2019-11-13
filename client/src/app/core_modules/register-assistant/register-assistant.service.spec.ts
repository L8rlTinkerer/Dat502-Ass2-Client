import { TestBed } from '@angular/core/testing';

import { RegisterAssistantService } from './register-assistant.service';

describe('RegisterAssistantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterAssistantService = TestBed.get(RegisterAssistantService);
    expect(service).toBeTruthy();
  });
});
