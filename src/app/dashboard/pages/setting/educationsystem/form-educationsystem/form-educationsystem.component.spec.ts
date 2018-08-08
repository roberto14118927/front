import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEducationsystemComponent } from './form-educationsystem.component';

describe('FormEducationsystemComponent', () => {
  let component: FormEducationsystemComponent;
  let fixture: ComponentFixture<FormEducationsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEducationsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEducationsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
