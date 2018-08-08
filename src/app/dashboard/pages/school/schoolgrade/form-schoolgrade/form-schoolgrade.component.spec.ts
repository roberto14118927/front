import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchoolgradeComponent } from './form-schoolgrade.component';

describe('FormSchoolgradeComponent', () => {
  let component: FormSchoolgradeComponent;
  let fixture: ComponentFixture<FormSchoolgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSchoolgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchoolgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
