import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyRowComponent } from './hourly-row.component';

describe('HourlyRowComponent', () => {
  let component: HourlyRowComponent;
  let fixture: ComponentFixture<HourlyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
