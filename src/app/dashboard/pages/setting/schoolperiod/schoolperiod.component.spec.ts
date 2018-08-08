import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolperiodComponent } from './schoolperiod.component';

describe('SchoolperiodComponent', () => {
  let component: SchoolperiodComponent;
  let fixture: ComponentFixture<SchoolperiodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolperiodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
