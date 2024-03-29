import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadvertComponent } from './addadvert.component';

describe('AddadvertComponent', () => {
  let component: AddadvertComponent;
  let fixture: ComponentFixture<AddadvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
