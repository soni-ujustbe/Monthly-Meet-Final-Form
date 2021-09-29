import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetAppComponent } from './meet-app.component';

describe('MeetAppComponent', () => {
  let component: MeetAppComponent;
  let fixture: ComponentFixture<MeetAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
