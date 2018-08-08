import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolgroupComponent } from './schoolgroup.component';

describe('SchoolgroupComponent', () => {
  let component: SchoolgroupComponent;
  let fixture: ComponentFixture<SchoolgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
