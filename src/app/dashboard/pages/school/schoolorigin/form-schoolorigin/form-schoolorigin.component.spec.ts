import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchooloriginComponent } from './form-schoolorigin.component';

describe('FormSchooloriginComponent', () => {
  let component: FormSchooloriginComponent;
  let fixture: ComponentFixture<FormSchooloriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSchooloriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchooloriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
