import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGanttChartComponent } from './ngx-gantt-chart.component';

describe('NgxGanttChartComponent', () => {
  let component: NgxGanttChartComponent;
  let fixture: ComponentFixture<NgxGanttChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGanttChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGanttChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
