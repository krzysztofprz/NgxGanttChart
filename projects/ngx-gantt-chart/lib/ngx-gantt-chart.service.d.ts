import * as i0 from "@angular/core";
export declare class NgxGanttChartService {
    constructor();
    /** Given a start and end date return the difference in months */
    static monthDiff(dateFrom: Date, dateTo: Date): number;
    /** Given a start and end date return the difference in days */
    static dateDifference(endDate: Date, startDate: Date, inlusiveOfEndDate?: boolean): number;
    /** This method will give you a month name based on a month number */
    static getMonthName(date: Date): string;
    /** Given a date this method will return the number of days in the specified month */
    static daysInMonth(date: Date): number;
    static addMonths(date: Date, monthsToAdd: number): Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxGanttChartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxGanttChartService>;
}
