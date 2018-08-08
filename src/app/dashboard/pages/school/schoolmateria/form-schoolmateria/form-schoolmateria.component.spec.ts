import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchoolmateriaComponent } from './form-schoolmateria.component';

describe('FormSchoolmateriaComponent', () => {
  let component: FormSchoolmateriaComponent;
  let fixture: ComponentFixture<FormSchoolmateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSchoolmateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchoolmateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
