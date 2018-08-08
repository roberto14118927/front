import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationperiodComponent } from './educationperiod.component';

describe('EducationperiodComponent', () => {
  let component: EducationperiodComponent;
  let fixture: ComponentFixture<EducationperiodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationperiodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
