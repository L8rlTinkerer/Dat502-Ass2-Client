import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddviewingComponent } from './addviewing.component';

describe('AddviewingComponent', () => {
  let component: AddviewingComponent;
  let fixture: ComponentFixture<AddviewingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddviewingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddviewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
