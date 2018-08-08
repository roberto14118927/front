import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnrollmentComponent } from './form-enrollment.component';

describe('FormEnrollmentComponent', () => {
  let component: FormEnrollmentComponent;
  let fixture: ComponentFixture<FormEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
