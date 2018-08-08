import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchooloriginlevelComponent } from './form-schooloriginlevel.component';

describe('FormSchooloriginlevelComponent', () => {
  let component: FormSchooloriginlevelComponent;
  let fixture: ComponentFixture<FormSchooloriginlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSchooloriginlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchooloriginlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
