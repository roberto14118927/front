import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupmateriastudentComponent } from './form-groupmateriastudent.component';

describe('FormGroupmateriastudentComponent', () => {
  let component: FormGroupmateriastudentComponent;
  let fixture: ComponentFixture<FormGroupmateriastudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupmateriastudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupmateriastudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
