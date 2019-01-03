import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDateTrackerComponent } from './next-date-tracker.component';

describe('NextDateTrackerComponent', () => {
  let component: NextDateTrackerComponent;
  let fixture: ComponentFixture<NextDateTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextDateTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextDateTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
