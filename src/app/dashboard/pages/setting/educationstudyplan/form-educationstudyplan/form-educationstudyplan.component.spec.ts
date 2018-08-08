import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEducationstudyplanComponent } from './form-educationstudyplan.component';

describe('FormEducationstudyplanComponent', () => {
  let component: FormEducationstudyplanComponent;
  let fixture: ComponentFixture<FormEducationstudyplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEducationstudyplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEducationstudyplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
