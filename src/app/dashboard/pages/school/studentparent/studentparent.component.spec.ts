import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentparentComponent } from './studentparent.component';

describe('StudentparentComponent', () => {
  let component: StudentparentComponent;
  let fixture: ComponentFixture<StudentparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
