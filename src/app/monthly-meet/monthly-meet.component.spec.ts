import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyMeetComponent } from './monthly-meet.component';

describe('MonthlyMeetComponent', () => {
  let component: MonthlyMeetComponent;
  let fixture: ComponentFixture<MonthlyMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyMeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
