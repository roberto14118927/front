import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeenrollmentComponent } from './homeenrollment.component';

describe('HomeenrollmentComponent', () => {
  let component: HomeenrollmentComponent;
  let fixture: ComponentFixture<HomeenrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeenrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeenrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
