import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasschoolshiftComponent } from './hasschoolshift.component';

describe('HasschoolshiftComponent', () => {
  let component: HasschoolshiftComponent;
  let fixture: ComponentFixture<HasschoolshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasschoolshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasschoolshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
