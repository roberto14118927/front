import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcycleComponent } from './schoolcycle.component';

describe('SchoolcycleComponent', () => {
  let component: SchoolcycleComponent;
  let fixture: ComponentFixture<SchoolcycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolcycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
