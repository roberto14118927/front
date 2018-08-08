import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEducationperiodComponent } from './form-educationperiod.component';

describe('FormEducationperiodComponent', () => {
  let component: FormEducationperiodComponent;
  let fixture: ComponentFixture<FormEducationperiodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEducationperiodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEducationperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
