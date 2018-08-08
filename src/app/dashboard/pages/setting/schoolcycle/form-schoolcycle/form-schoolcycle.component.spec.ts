import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchoolcycleComponent } from './form-schoolcycle.component';

describe('FormSchoolcycleComponent', () => {
  let component: FormSchoolcycleComponent;
  let fixture: ComponentFixture<FormSchoolcycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSchoolcycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchoolcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
