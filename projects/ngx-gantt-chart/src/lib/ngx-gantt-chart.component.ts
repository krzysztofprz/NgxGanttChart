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
    const chartMonths = this.endDate.getMonth() - this.startDate.getMonth() + 1;

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
