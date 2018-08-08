import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooloriginComponent } from './schoolorigin.component';

describe('SchooloriginComponent', () => {
  let component: SchooloriginComponent;
  let fixture: ComponentFixture<SchooloriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooloriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooloriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
