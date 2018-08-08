import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationsystemComponent } from './educationsystem.component';

describe('EducationsystemComponent', () => {
  let component: EducationsystemComponent;
  let fixture: ComponentFixture<EducationsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
