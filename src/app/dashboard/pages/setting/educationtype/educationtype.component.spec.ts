import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationtypeComponent } from './educationtype.component';

describe('EducationtypeComponent', () => {
  let component: EducationtypeComponent;
  let fixture: ComponentFixture<EducationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
