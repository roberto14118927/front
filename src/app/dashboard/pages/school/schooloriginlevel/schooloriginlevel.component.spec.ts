import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooloriginlevelComponent } from './schooloriginlevel.component';

describe('SchooloriginlevelComponent', () => {
  let component: SchooloriginlevelComponent;
  let fixture: ComponentFixture<SchooloriginlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooloriginlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooloriginlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
