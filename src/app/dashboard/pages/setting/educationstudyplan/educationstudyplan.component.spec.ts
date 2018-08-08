import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationstudyplanComponent } from './educationstudyplan.component';

describe('EducationstudyplanComponent', () => {
  let component: EducationstudyplanComponent;
  let fixture: ComponentFixture<EducationstudyplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationstudyplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationstudyplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
