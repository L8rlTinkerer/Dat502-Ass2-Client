import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAssistantComponent } from './register-assistant.component';

describe('RegisterAssistantComponent', () => {
  let component: RegisterAssistantComponent;
  let fixture: ComponentFixture<RegisterAssistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAssistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
