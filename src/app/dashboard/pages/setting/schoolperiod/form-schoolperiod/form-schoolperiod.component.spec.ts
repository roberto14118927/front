import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchoolperiodComponent } from './form-schoolperiod.component';

describe('FormSchoolperiodComponent', () => {
  let component: FormSchoolperiodComponent;
  let fixture: ComponentFixture<FormSchoolperiodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSchoolperiodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchoolperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
