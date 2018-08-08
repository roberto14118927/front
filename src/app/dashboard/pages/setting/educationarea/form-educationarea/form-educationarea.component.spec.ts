import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEducationareaComponent } from './form-educationarea.component';

describe('FormEducationareaComponent', () => {
  let component: FormEducationareaComponent;
  let fixture: ComponentFixture<FormEducationareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEducationareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEducationareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
