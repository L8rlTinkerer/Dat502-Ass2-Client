import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantDashboardComponent } from './assistant-dashboard.component';

describe('AssistantDashboardComponent', () => {
  let component: AssistantDashboardComponent;
  let fixture: ComponentFixture<AssistantDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistantDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
