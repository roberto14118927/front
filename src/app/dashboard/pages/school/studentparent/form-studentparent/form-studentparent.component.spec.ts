import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudentparentComponent } from './form-studentparent.component';

describe('FormStudentparentComponent', () => {
  let component: FormStudentparentComponent;
  let fixture: ComponentFixture<FormStudentparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStudentparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStudentparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
