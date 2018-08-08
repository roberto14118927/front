import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInstitutionComponent } from './form-institution.component';

describe('FormInstitutionComponent', () => {
  let component: FormInstitutionComponent;
  let fixture: ComponentFixture<FormInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
