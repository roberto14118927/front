import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationlevelComponent } from './educationlevel.component';

describe('EducationlevelComponent', () => {
  let component: EducationlevelComponent;
  let fixture: ComponentFixture<EducationlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
