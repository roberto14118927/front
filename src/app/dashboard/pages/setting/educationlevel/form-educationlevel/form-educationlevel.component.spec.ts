import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEducationlevelComponent } from './form-educationlevel.component';

describe('FormEducationlevelComponent', () => {
  let component: FormEducationlevelComponent;
  let fixture: ComponentFixture<FormEducationlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEducationlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEducationlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
