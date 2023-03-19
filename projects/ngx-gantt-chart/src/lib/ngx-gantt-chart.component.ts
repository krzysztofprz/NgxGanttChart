import { Component, Input } from '@angular/core';
import { IGanttCharRow } from './models/IGanttCharRow';
import { NgxGanttChartService } from './ngx-gantt-chart.service';

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
  months: { month: number; monthName: string }[] = [];
  monthBlockWidth = 0;

  constructor() {
    this.months = [
      {
        month: new Date('2023-03-01').getMonth(),
        monthName: NgxGanttChartService.getMonthName(new Date('2023-03-01')),
      },
      {
        month: new Date('2023-04-01').getMonth(),
        monthName: NgxGanttChartService.getMonthName(new Date('2023-04-01')),
      },
      {
        month: new Date('2023-05-01').getMonth(),
        monthName: NgxGanttChartService.getMonthName(new Date('2023-05-01')),
      },
      {
        month: new Date('2023-06-01').getMonth(),
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
        monthPercentage: 0,
        leftOffset: 0,
      },
      {
        name: 'Manuscript',
        startDate: new Date('2023-03-10'),
        endDate: new Date('2023-03-15'),
        monthPercentage: 8.333,
        leftOffset: 0,
      },
      {
        name: 'Cover',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-04-15'),
        monthPercentage: 0,
        leftOffset: 0,
      },
      {
        name: 'Styling',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-04-15'),
        monthPercentage: 0,
        leftOffset: 0,
      },
      {
        name: 'Layout',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-04-15'),
        monthPercentage: 0,
        leftOffset: 0,
      },
      {
        name: 'Typesetting',
        startDate: new Date('2023-04-15'),
        endDate: new Date('2023-04-30'),
        monthPercentage: 0,
        leftOffset: 0,
      },
    ];

    this.rows.forEach((row) => {
      const rowStartDateDay =
        row.startDate.getDate() === 1 ? 0 : row.startDate.getDate();
      const rowStartDateMonth = row.startDate.getMonth();

      const monthsDiff =
        (row.endDate.getMonth() - rowStartDateMonth) * this.MONTH_DAYS;

      const daysDiff = row.endDate.getDate() - rowStartDateDay + monthsDiff;

      row.monthPercentage = (daysDiff / this.chart_days) * 100;

      const startDateMonthsDiff =
        (rowStartDateMonth - this.months[0].month) * this.MONTH_DAYS;

      row.leftOffset =
        ((rowStartDateDay + startDateMonthsDiff) / this.chart_days) * 100;
    });
  }
}
