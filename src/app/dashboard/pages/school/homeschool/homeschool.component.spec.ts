import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeschoolComponent } from './homeschool.component';

describe('HomeschoolComponent', () => {
  let component: HomeschoolComponent;
  let fixture: ComponentFixture<HomeschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
