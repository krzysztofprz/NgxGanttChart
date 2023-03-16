import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// @Injectable({
//   providedIn: 'root',
//   providedIn: NgxGanttChartModule,
// })
class NgxGanttChartService {
    constructor() { }
    /** Given a start and end date return the difference in months */
    static monthDiff(dateFrom, dateTo) {
        dateFrom = new Date(dateFrom);
        dateTo = new Date(dateTo);
        return (dateTo.getMonth() -
            dateFrom.getMonth() +
            12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
    }
    /** Given a start and end date return the difference in days */
    static dateDifference(endDate, startDate, inlusiveOfEndDate = false) {
        endDate = new Date(endDate);
        startDate = new Date(startDate);
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const utc2 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        return (Math.abs(Math.floor((utc2 - utc1) / _MS_PER_DAY)) +
            (inlusiveOfEndDate ? 2 : 1));
    }
    /** This method will give you a month name based on a month number */
    static getMonthName(date) {
        return new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    }
    /** Given a date this method will return the number of days in the specified month */
    static daysInMonth(date) {
        date = new Date(date);
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }
    static addMonths(date, monthsToAdd) {
        date = new Date(date);
        // always assume just shifting one month across so set date to first day of month
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        return new Date(firstDayOfMonth.setMonth(monthsToAdd + firstDayOfMonth.getMonth()));
    }
}
NgxGanttChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: NgxGanttChartService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxGanttChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: NgxGanttChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: NgxGanttChartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class NgxGanttChartComponent {
    constructor() {
        this.rows = [];
        this.startDate = new Date('2021-01-01');
        this.endDate = new Date('2021-04-30');
        this.colourPallete = [
            '#7C4DFF',
            '#81c784',
            '#e53935',
            '#FF8A80',
            '#303F9F',
            '#40C4FF',
            '#006064',
            '#FF8A65',
        ];
        this.chartPeriodDays = NgxGanttChartService.dateDifference(this.endDate, this.startDate, true);
        this.monthAxis = this.getMonths(this.startDate, this.endDate);
    }
    ngOnInit() { }
    /** Given an event calculate the percentage of days over the total gantt chart period */
    getEventDurationPercentage(event) {
        const eventDays = NgxGanttChartService.dateDifference(event.endDate, event.startDate);
        return (eventDays / this.chartPeriodDays) * 100;
    }
    /** Given an date the percentage of days over the total gantt chart period */
    getEventOffsetPercentage(eventStartDate) {
        const daysPriorToEventStart = NgxGanttChartService.dateDifference(eventStartDate, this.startDate);
        return ((daysPriorToEventStart - 1) / this.chartPeriodDays) * 100;
    }
    /** Given a start and end date will return full months between period along with month names and
     * relative duration percentages for each month
     */
    getMonths(startDate, endDate) {
        const startMonth = startDate.getMonth();
        const endMonth = endDate.getMonth();
        const totalDurationDays = NgxGanttChartService.dateDifference(startDate, endDate, true);
        const months = [];
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
    getColour(rowIndex) {
        if (this.rows.length < rowIndex) {
            return '#64b5f6';
        }
        return this.colourPallete[rowIndex];
    }
}
NgxGanttChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: NgxGanttChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxGanttChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.2", type: NgxGanttChartComponent, selector: "ngx-gantt-chart", inputs: { rows: "rows", startDate: "startDate", endDate: "endDate" }, ngImport: i0, template: "<div class=\"container\">\r\n  <!-- header row-->\r\n  <div class=\"row-axis\">\r\n    <div class=\"row-title\">Activities</div>\r\n    <div class=\"month-axis\">\r\n      <span\r\n        class=\"month\"\r\n        *ngFor=\"let month of monthAxis\"\r\n        [style.width]=\"month.monthDurationPercentage + '%'\"\r\n      >\r\n        {{ month.monthName }}</span\r\n      >\r\n    </div>\r\n  </div>\r\n\r\n  <!-- gantt chart rows-->\r\n  <div class=\"gantt-chart-row\" *ngFor=\"let row of rows; let i = index\">\r\n    <div class=\"row-title\">\r\n      {{ row.name }}\r\n    </div>\r\n    <div class=\"row-events\">\r\n      <!-- event period blocks-->\r\n      <div\r\n        class=\"event-period tooltip\"\r\n        *ngFor=\"let event of row.events\"\r\n        [style.margin-left]=\"getEventOffsetPercentage(event.startDate) + '%'\"\r\n        [style.width]=\"getEventDurationPercentage(event) + '%'\"\r\n        [style.background]=\"getColour(i)\"\r\n      >\r\n        <span class=\"event-name\">{{ event.name }}</span>\r\n        <div class=\"tooltip-text\">\r\n          <div>\r\n            <strong>{{ event.name }}: </strong>\r\n          </div>\r\n          {{ event.startDate | date : \"mediumDate\" }} -\r\n          {{ event.endDate | date : \"mediumDate\" }}\r\n        </div>\r\n      </div>\r\n\r\n      <!-- event milestones-->\r\n      <div\r\n        class=\"event-milestone tooltip\"\r\n        *ngFor=\"let milestone of row.milestones\"\r\n        [style.margin-left]=\"getEventOffsetPercentage(milestone.date) + '%'\"\r\n      >\r\n        <i class=\"fas fa-star\"></i>\r\n        <div class=\"tooltip-text\">\r\n          <div>\r\n            <strong>{{ milestone.name }}: </strong>\r\n          </div>\r\n          {{ milestone.date | date : \"mediumDate\" }}\r\n        </div>\r\n      </div>\r\n\r\n      <!-- gantt chart grid lines-->\r\n      <div class=\"grid-lines\">\r\n        <span\r\n          class=\"grid-line\"\r\n          *ngFor=\"let month of monthAxis\"\r\n          [style.width]=\"month.monthDurationPercentage + '%'\"\r\n        ></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".container{min-width:600px}.row-axis{display:flex;flex-direction:row;overflow:hidden;text-align:center;background-color:#bdbdbd;color:#fff}.row-title{font-weight:700;width:15rem;padding-right:1rem;padding-left:1rem}.month-axis{font-weight:700;position:relative;display:flex;width:100%;align-items:stretch}.month{margin:auto;height:100%;border-right:solid white}.month:first-child{border-left:solid white}.gantt-chart-row{font-size:.8rem;border-top:1px solid #e7e7ea;display:flex;flex-direction:row;overflow:hidden}.row-title{font-weight:700;width:15rem;border-right:1px solid #e7e7ea;padding:1rem;background-color:#f5f5f5}.event-period{height:40%;position:absolute;border-radius:16px;text-align:center}.event-name{color:#fff;text-align:center;vertical-align:middle;font-size:.7rem;font-weight:700}.event-milestone{position:absolute;font-size:.7rem;color:orange}.row-events{position:relative;display:flex;align-items:center;width:100%}.grid-lines{display:flex;width:100%;height:100%}.grid-line{border-right:1px solid #e7e7ea}.gantt-chart-row:last-child{border-bottom:1px solid #e7e7ea}.gantt-chart-row:nth-child(odd).row-events{background-color:#fafafa}.gantt-chart-row:first-child,.gantt-chart-row:first-child.row-title{border:none}.tooltip:hover .tooltip-text{display:block}.tooltip-text{display:none;color:#fff;position:fixed;z-index:1000;background:black;max-width:10rem;text-align:center;padding:.5rem;margin-left:-5px;margin-top:5px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: i1.DatePipe, name: "date" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: NgxGanttChartComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-gantt-chart', template: "<div class=\"container\">\r\n  <!-- header row-->\r\n  <div class=\"row-axis\">\r\n    <div class=\"row-title\">Activities</div>\r\n    <div class=\"month-axis\">\r\n      <span\r\n        class=\"month\"\r\n        *ngFor=\"let month of monthAxis\"\r\n        [style.width]=\"month.monthDurationPercentage + '%'\"\r\n      >\r\n        {{ month.monthName }}</span\r\n      >\r\n    </div>\r\n  </div>\r\n\r\n  <!-- gantt chart rows-->\r\n  <div class=\"gantt-chart-row\" *ngFor=\"let row of rows; let i = index\">\r\n    <div class=\"row-title\">\r\n      {{ row.name }}\r\n    </div>\r\n    <div class=\"row-events\">\r\n      <!-- event period blocks-->\r\n      <div\r\n        class=\"event-period tooltip\"\r\n        *ngFor=\"let event of row.events\"\r\n        [style.margin-left]=\"getEventOffsetPercentage(event.startDate) + '%'\"\r\n        [style.width]=\"getEventDurationPercentage(event) + '%'\"\r\n        [style.background]=\"getColour(i)\"\r\n      >\r\n        <span class=\"event-name\">{{ event.name }}</span>\r\n        <div class=\"tooltip-text\">\r\n          <div>\r\n            <strong>{{ event.name }}: </strong>\r\n          </div>\r\n          {{ event.startDate | date : \"mediumDate\" }} -\r\n          {{ event.endDate | date : \"mediumDate\" }}\r\n        </div>\r\n      </div>\r\n\r\n      <!-- event milestones-->\r\n      <div\r\n        class=\"event-milestone tooltip\"\r\n        *ngFor=\"let milestone of row.milestones\"\r\n        [style.margin-left]=\"getEventOffsetPercentage(milestone.date) + '%'\"\r\n      >\r\n        <i class=\"fas fa-star\"></i>\r\n        <div class=\"tooltip-text\">\r\n          <div>\r\n            <strong>{{ milestone.name }}: </strong>\r\n          </div>\r\n          {{ milestone.date | date : \"mediumDate\" }}\r\n        </div>\r\n      </div>\r\n\r\n      <!-- gantt chart grid lines-->\r\n      <div class=\"grid-lines\">\r\n        <span\r\n          class=\"grid-line\"\r\n          *ngFor=\"let month of monthAxis\"\r\n          [style.width]=\"month.monthDurationPercentage + '%'\"\r\n        ></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".container{min-width:600px}.row-axis{display:flex;flex-direction:row;overflow:hidden;text-align:center;background-color:#bdbdbd;color:#fff}.row-title{font-weight:700;width:15rem;padding-right:1rem;padding-left:1rem}.month-axis{font-weight:700;position:relative;display:flex;width:100%;align-items:stretch}.month{margin:auto;height:100%;border-right:solid white}.month:first-child{border-left:solid white}.gantt-chart-row{font-size:.8rem;border-top:1px solid #e7e7ea;display:flex;flex-direction:row;overflow:hidden}.row-title{font-weight:700;width:15rem;border-right:1px solid #e7e7ea;padding:1rem;background-color:#f5f5f5}.event-period{height:40%;position:absolute;border-radius:16px;text-align:center}.event-name{color:#fff;text-align:center;vertical-align:middle;font-size:.7rem;font-weight:700}.event-milestone{position:absolute;font-size:.7rem;color:orange}.row-events{position:relative;display:flex;align-items:center;width:100%}.grid-lines{display:flex;width:100%;height:100%}.grid-line{border-right:1px solid #e7e7ea}.gantt-chart-row:last-child{border-bottom:1px solid #e7e7ea}.gantt-chart-row:nth-child(odd).row-events{background-color:#fafafa}.gantt-chart-row:first-child,.gantt-chart-row:first-child.row-title{border:none}.tooltip:hover .tooltip-text{display:block}.tooltip-text{display:none;color:#fff;position:fixed;z-index:1000;background:black;max-width:10rem;text-align:center;padding:.5rem;margin-left:-5px;margin-top:5px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { rows: [{
                type: Input
            }], startDate: [{
                type: Input
            }], endDate: [{
                type: Input
            }] } });

class NgxGanttChartModule {
}
NgxGanttChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: NgxGanttChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxGanttChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.2", ngImport: i0, type: NgxGanttChartModule, declarations: [NgxGanttChartComponent], imports: [BrowserModule, CommonModule, DatePipe], exports: [NgxGanttChartComponent, DatePipe] });
NgxGanttChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: NgxGanttChartModule, providers: [NgxGanttChartService], imports: [BrowserModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: NgxGanttChartModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [BrowserModule, CommonModule, DatePipe],
                    declarations: [NgxGanttChartComponent],
                    exports: [NgxGanttChartComponent, DatePipe],
                    providers: [NgxGanttChartService],
                }]
        }] });

/*
 * Public API Surface of ngx-gantt-chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxGanttChartComponent, NgxGanttChartModule, NgxGanttChartService };
//# sourceMappingURL=ngx-gantt-chart.mjs.map
