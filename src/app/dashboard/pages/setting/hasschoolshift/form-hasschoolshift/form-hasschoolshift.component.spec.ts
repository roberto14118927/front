import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHasschoolshiftComponent } from './form-hasschoolshift.component';

describe('FormHasschoolshiftComponent', () => {
  let component: FormHasschoolshiftComponent;
  let fixture: ComponentFixture<FormHasschoolshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHasschoolshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHasschoolshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
