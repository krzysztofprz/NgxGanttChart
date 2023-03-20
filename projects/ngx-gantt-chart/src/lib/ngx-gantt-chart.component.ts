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

  MONTH_DAYS = 30;
  chart_days = 0;
  months: { month: number; monthName: string }[] = [];
  monthBlockWidth = 0;

  constructor() {}

  ngOnInit(): void {
    this.startDate = new Date('2023-03-01');
    this.endDate = new Date('2023-06-01');

    const chartMonths = this.endDate.getMonth() - this.startDate.getMonth();

    let i = 0;

    for (i; i < chartMonths; i++) {
      this.months.push({
        month: this.startDate.getMonth() + i,
        monthName: NgxGanttChartService.getMonthName(
          new Date(
            this.startDate.getFullYear(),
            this.startDate.getMonth() + i,
            this.startDate.getDate()
          )
        ),
      });
    }

    this.monthBlockWidth = 100 / chartMonths;
    this.chart_days = chartMonths * this.MONTH_DAYS;

    this.rows = [
      {
        eventName: 'CopyrightAcquiring',
        startDate: new Date('2023-03-01'),
        endDate: new Date('2023-03-10'),
        monthPercentage: 0,
        leftOffset: 0,
      },
      {
        eventName: 'Manuscript',
        startDate: new Date('2023-03-10'),
        endDate: new Date('2023-03-15'),
        monthPercentage: 8.333,
        leftOffset: 0,
      },
      {
        eventName: 'Cover',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-04-15'),
        monthPercentage: 0,
        leftOffset: 0,
      },
      {
        eventName: 'Styling',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-04-15'),
        monthPercentage: 0,
        leftOffset: 0,
      },
      {
        eventName: 'Layout',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-04-15'),
        monthPercentage: 0,
        leftOffset: 0,
      },
      {
        eventName: 'Typesetting',
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
        (rowStartDateMonth - this.startDate.getMonth()) * this.MONTH_DAYS;

      row.leftOffset =
        ((rowStartDateDay + startDateMonthsDiff) / this.chart_days) * 100;
    });
  }
}
