import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationareaComponent } from './educationarea.component';

describe('EducationareaComponent', () => {
  let component: EducationareaComponent;
  let fixture: ComponentFixture<EducationareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
