import { Component, Input } from '@angular/core';
import { IGanttCharRow } from './models/IGanttCharRow';
import { IGanttChartEvent } from './models/IGanttChartEvent';
import { NgxGanttChartService } from './ngx-gantt-chart.service';
import { MonthAxis } from './models/MonthAxis';

@Component({
  selector: 'ngx-gantt-chart',
  templateUrl: 'ngx-gantt-chart.component.html',
  styleUrls: ['ngx-gantt-chart.component.css'],
})
export class NgxGanttChartComponent {
  @Input() rows: IGanttCharRow[] = [];
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  test =
    'First ordered list item\n2. Another item\n * Unordered sub-list.\n'.replace(
      '\n',
      '<br/>'
    );

  MONTH_DAYS = 30;
  chart_days = 0;
  months: { monthName: string }[] = [];
  monthBlockWidth = 0;

  constructor() {
    this.months = [
      {
        monthName: NgxGanttChartService.getMonthName(new Date('2023-03-01')),
      },
      {
        monthName: NgxGanttChartService.getMonthName(new Date('2023-04-01')),
      },
      {
        monthName: NgxGanttChartService.getMonthName(new Date('2023-05-01')),
      },
      {
        monthName: NgxGanttChartService.getMonthName(new Date('2023-06-01')),
      },
    ];

    this.monthBlockWidth = 100 / this.months.length;
    this.chart_days = this.months.length * this.MONTH_DAYS;
  }

  ngOnInit(): void {
    this.rows = [
      {
        name: 'CopyrightAcquiring',
        startDate: new Date('2023-03-01'),
        endDate: new Date('2023-03-10'),
        monthPercentage: 16.667,
        leftOffset: 0,
      },
      {
        name: 'Manuscript',
        startDate: new Date('2023-03-10'),
        endDate: new Date('2023-03-15'),
        monthPercentage: 8.333,
        leftOffset: 16.667,
      },
      {
        name: 'Cover',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-04-15'),
        monthPercentage: 50,
        leftOffset: 25,
      },
      {
        name: 'Styling',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-04-15'),
        monthPercentage: 50,
        leftOffset: 25,
      },
      {
        name: 'Layout',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-04-15'),
        monthPercentage: 50,
        leftOffset: 25,
      },
      {
        name: 'Typesetting',
        startDate: new Date('2023-04-15'),
        endDate: new Date('2023-04-30'),
        monthPercentage: 25,
        leftOffset: 75,
      },
    ];

    this.rows.forEach((row) => {
      const monthsDiff =
        (row.endDate.getMonth() - row.startDate.getMonth()) * this.MONTH_DAYS;

      const daysDiff =
        row.endDate.getDate() - row.startDate.getDate() + monthsDiff;

      row.monthPercentage = (daysDiff / this.chart_days) * 100;
    });
  }
}
