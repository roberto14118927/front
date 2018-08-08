import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchoolshiftComponent } from './form-schoolshift.component';

describe('FormSchoolshiftComponent', () => {
  let component: FormSchoolshiftComponent;
  let fixture: ComponentFixture<FormSchoolshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSchoolshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchoolshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
