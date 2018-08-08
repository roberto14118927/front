import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolgradeComponent } from './schoolgrade.component';

describe('SchoolgradeComponent', () => {
  let component: SchoolgradeComponent;
  let fixture: ComponentFixture<SchoolgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
