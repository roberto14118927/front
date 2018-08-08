import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesettingComponent } from './homesetting.component';

describe('HomesettingComponent', () => {
  let component: HomesettingComponent;
  let fixture: ComponentFixture<HomesettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
