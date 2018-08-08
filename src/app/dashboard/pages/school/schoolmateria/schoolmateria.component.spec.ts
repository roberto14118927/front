import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolmateriaComponent } from './schoolmateria.component';

describe('SchoolmateriaComponent', () => {
  let component: SchoolmateriaComponent;
  let fixture: ComponentFixture<SchoolmateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolmateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolmateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
