import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchoolgroupComponent } from './form-schoolgroup.component';

describe('FormSchoolgroupComponent', () => {
  let component: FormSchoolgroupComponent;
  let fixture: ComponentFixture<FormSchoolgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSchoolgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchoolgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
