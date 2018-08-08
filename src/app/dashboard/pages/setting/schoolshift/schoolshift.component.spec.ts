import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolshiftComponent } from './schoolshift.component';

describe('SchoolshiftComponent', () => {
  let component: SchoolshiftComponent;
  let fixture: ComponentFixture<SchoolshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
