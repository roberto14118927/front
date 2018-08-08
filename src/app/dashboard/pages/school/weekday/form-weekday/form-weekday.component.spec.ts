import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWeekdayComponent } from './form-weekday.component';

describe('FormWeekdayComponent', () => {
  let component: FormWeekdayComponent;
  let fixture: ComponentFixture<FormWeekdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWeekdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWeekdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
