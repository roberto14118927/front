import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEducationtypeComponent } from './form-educationtype.component';

describe('FormEducationtypeComponent', () => {
  let component: FormEducationtypeComponent;
  let fixture: ComponentFixture<FormEducationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEducationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEducationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
