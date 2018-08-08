import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupmateriastudentComponent } from './groupmateriastudent.component';

describe('GroupmateriastudentComponent', () => {
  let component: GroupmateriastudentComponent;
  let fixture: ComponentFixture<GroupmateriastudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupmateriastudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupmateriastudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
