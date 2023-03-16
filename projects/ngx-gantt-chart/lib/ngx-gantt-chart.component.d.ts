import { IGanttCharRow } from './models/IGanttCharRow';
import { IGanttChartEvent } from './models/IGanttChartEvent';
import { MonthAxis } from './models/MonthAxis';
import * as i0 from "@angular/core";
export declare class NgxGanttChartComponent {
    rows: IGanttCharRow[];
    startDate: Date;
    endDate: Date;
    chartPeriodDays: number;
    monthAxis: MonthAxis[];
    colourPallete: string[];
    constructor();
    ngOnInit(): void;
    /** Given an event calculate the percentage of days over the total gantt chart period */
    getEventDurationPercentage(event: IGanttChartEvent): number;
    /** Given an date the percentage of days over the total gantt chart period */
    getEventOffsetPercentage(eventStartDate: Date): number;
    /** Given a start and end date will return full months between period along with month names and
     * relative duration percentages for each month
     */
    getMonths(startDate: Date, endDate: Date): MonthAxis[];
    /** Given colour for */
    getColour(rowIndex: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxGanttChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxGanttChartComponent, "ngx-gantt-chart", never, { "rows": "rows"; "startDate": "startDate"; "endDate": "endDate"; }, {}, never, never, false, never>;
}
