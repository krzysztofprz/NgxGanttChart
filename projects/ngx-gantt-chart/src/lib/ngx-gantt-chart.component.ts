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
  @Input() startDate: Date = new Date('2021-01-01');
  @Input() endDate: Date = new Date('2021-04-30');

  chartPeriodDays: number;
  monthAxis: MonthAxis[];
  colourPallete = [
    '#7C4DFF',
    '#81c784',
    '#e53935',
    '#FF8A80',
    '#303F9F',
    '#40C4FF',
    '#006064',
    '#FF8A65',
  ];

  constructor() {
    this.chartPeriodDays = NgxGanttChartService.dateDifference(
      this.endDate,
      this.startDate,
      true
    );
    this.monthAxis = this.getMonths(this.startDate, this.endDate);
  }

  ngOnInit(): void {}

  /** Given an event calculate the percentage of days over the total gantt chart period */
  getEventDurationPercentage(event: IGanttChartEvent): number {
    const eventDays = NgxGanttChartService.dateDifference(
      event.endDate,
      event.startDate
    );
    return (eventDays / this.chartPeriodDays) * 100;
  }

  /** Given an date the percentage of days over the total gantt chart period */
  getEventOffsetPercentage(eventStartDate: Date): number {
    const daysPriorToEventStart = NgxGanttChartService.dateDifference(
      eventStartDate,
      this.startDate
    );
    return ((daysPriorToEventStart - 1) / this.chartPeriodDays) * 100;
  }

  /** Given a start and end date will return full months between period along with month names and
   * relative duration percentages for each month
   */
  getMonths(startDate: Date, endDate: Date): MonthAxis[] {
    const startMonth = startDate.getMonth();
    const endMonth = endDate.getMonth();
    const totalDurationDays = NgxGanttChartService.dateDifference(
      startDate,
      endDate,
      true
    );
    const months: MonthAxis[] = [];

    let i = 0;
    const iMax = endMonth - startMonth;

    for (i; i <= iMax; i++) {
      const adjustedStartDate = NgxGanttChartService.addMonths(startDate, i);
      const monthName = NgxGanttChartService.getMonthName(adjustedStartDate);
      const daysInMonth = NgxGanttChartService.daysInMonth(adjustedStartDate);
      const monthDurationPercentage = (daysInMonth / totalDurationDays) * 100;
      months.push({
        monthName: monthName,
        monthDurationPercentage: monthDurationPercentage,
      });
    }
    return months;
  }

  /** Given colour for */
  getColour(rowIndex: number): string {
    if (this.rows.length < rowIndex) {
      return '#64b5f6';
    }

    return this.colourPallete[rowIndex];
  }
}
