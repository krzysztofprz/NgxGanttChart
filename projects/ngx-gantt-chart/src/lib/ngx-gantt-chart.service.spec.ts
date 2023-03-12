import { TestBed } from '@angular/core/testing';

import { NgxGanttChartService } from './ngx-gantt-chart.service';

describe('NgxGanttChartService', () => {
  let service: NgxGanttChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGanttChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
