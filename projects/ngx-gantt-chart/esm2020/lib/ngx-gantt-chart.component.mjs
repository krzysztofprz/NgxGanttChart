import { Component, Input } from '@angular/core';
import { NgxGanttChartService } from './ngx-gantt-chart.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgxGanttChartComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbnR0LWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1nYW50dC1jaGFydC9zcmMvbGliL25neC1nYW50dC1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ2FudHQtY2hhcnQvc3JjL2xpYi9uZ3gtZ2FudHQtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQVFqRSxNQUFNLE9BQU8sc0JBQXNCO0lBa0JqQztRQWpCUyxTQUFJLEdBQW9CLEVBQUUsQ0FBQztRQUMzQixjQUFTLEdBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsWUFBTyxHQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBSWhELGtCQUFhLEdBQUc7WUFDZCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztTQUNWLENBQUM7UUFHQSxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFvQixDQUFDLGNBQWMsQ0FDeEQsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FDTCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxRQUFRLEtBQVUsQ0FBQztJQUVuQix3RkFBd0Y7SUFDeEYsMEJBQTBCLENBQUMsS0FBdUI7UUFDaEQsTUFBTSxTQUFTLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxDQUNuRCxLQUFLLENBQUMsT0FBTyxFQUNiLEtBQUssQ0FBQyxTQUFTLENBQ2hCLENBQUM7UUFDRixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbEQsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSx3QkFBd0IsQ0FBQyxjQUFvQjtRQUMzQyxNQUFNLHFCQUFxQixHQUFHLG9CQUFvQixDQUFDLGNBQWMsQ0FDL0QsY0FBYyxFQUNkLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQztRQUNGLE9BQU8sQ0FBQyxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDcEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUyxDQUFDLFNBQWUsRUFBRSxPQUFhO1FBQ3RDLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMsTUFBTSxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQzNELFNBQVMsRUFDVCxPQUFPLEVBQ1AsSUFBSSxDQUNMLENBQUM7UUFDRixNQUFNLE1BQU0sR0FBZ0IsRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLE1BQU0sSUFBSSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFFbkMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QixNQUFNLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkUsTUFBTSxTQUFTLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDdkUsTUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDeEUsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN4RSxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLFNBQVMsRUFBRSxTQUFTO2dCQUNwQix1QkFBdUIsRUFBRSx1QkFBdUI7YUFDakQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsdUJBQXVCO0lBQ3ZCLFNBQVMsQ0FBQyxRQUFnQjtRQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBRTtZQUMvQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDOzttSEFuRlUsc0JBQXNCO3VHQUF0QixzQkFBc0IsNkhDWG5DLGltRUFpRUE7MkZEdERhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxpQkFBaUI7MEVBS2xCLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUdhbnR0Q2hhclJvdyB9IGZyb20gJy4vbW9kZWxzL0lHYW50dENoYXJSb3cnO1xyXG5pbXBvcnQgeyBJR2FudHRDaGFydEV2ZW50IH0gZnJvbSAnLi9tb2RlbHMvSUdhbnR0Q2hhcnRFdmVudCc7XHJcbmltcG9ydCB7IE5neEdhbnR0Q2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZ2FudHQtY2hhcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vbnRoQXhpcyB9IGZyb20gJy4vbW9kZWxzL01vbnRoQXhpcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1nYW50dC1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICduZ3gtZ2FudHQtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyduZ3gtZ2FudHQtY2hhcnQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4R2FudHRDaGFydENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcm93czogSUdhbnR0Q2hhclJvd1tdID0gW107XHJcbiAgQElucHV0KCkgc3RhcnREYXRlOiBEYXRlID0gbmV3IERhdGUoJzIwMjEtMDEtMDEnKTtcclxuICBASW5wdXQoKSBlbmREYXRlOiBEYXRlID0gbmV3IERhdGUoJzIwMjEtMDQtMzAnKTtcclxuXHJcbiAgY2hhcnRQZXJpb2REYXlzOiBudW1iZXI7XHJcbiAgbW9udGhBeGlzOiBNb250aEF4aXNbXTtcclxuICBjb2xvdXJQYWxsZXRlID0gW1xyXG4gICAgJyM3QzRERkYnLFxyXG4gICAgJyM4MWM3ODQnLFxyXG4gICAgJyNlNTM5MzUnLFxyXG4gICAgJyNGRjhBODAnLFxyXG4gICAgJyMzMDNGOUYnLFxyXG4gICAgJyM0MEM0RkYnLFxyXG4gICAgJyMwMDYwNjQnLFxyXG4gICAgJyNGRjhBNjUnLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jaGFydFBlcmlvZERheXMgPSBOZ3hHYW50dENoYXJ0U2VydmljZS5kYXRlRGlmZmVyZW5jZShcclxuICAgICAgdGhpcy5lbmREYXRlLFxyXG4gICAgICB0aGlzLnN0YXJ0RGF0ZSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIHRoaXMubW9udGhBeGlzID0gdGhpcy5nZXRNb250aHModGhpcy5zdGFydERhdGUsIHRoaXMuZW5kRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKiBHaXZlbiBhbiBldmVudCBjYWxjdWxhdGUgdGhlIHBlcmNlbnRhZ2Ugb2YgZGF5cyBvdmVyIHRoZSB0b3RhbCBnYW50dCBjaGFydCBwZXJpb2QgKi9cclxuICBnZXRFdmVudER1cmF0aW9uUGVyY2VudGFnZShldmVudDogSUdhbnR0Q2hhcnRFdmVudCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBldmVudERheXMgPSBOZ3hHYW50dENoYXJ0U2VydmljZS5kYXRlRGlmZmVyZW5jZShcclxuICAgICAgZXZlbnQuZW5kRGF0ZSxcclxuICAgICAgZXZlbnQuc3RhcnREYXRlXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChldmVudERheXMgLyB0aGlzLmNoYXJ0UGVyaW9kRGF5cykgKiAxMDA7XHJcbiAgfVxyXG5cclxuICAvKiogR2l2ZW4gYW4gZGF0ZSB0aGUgcGVyY2VudGFnZSBvZiBkYXlzIG92ZXIgdGhlIHRvdGFsIGdhbnR0IGNoYXJ0IHBlcmlvZCAqL1xyXG4gIGdldEV2ZW50T2Zmc2V0UGVyY2VudGFnZShldmVudFN0YXJ0RGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkYXlzUHJpb3JUb0V2ZW50U3RhcnQgPSBOZ3hHYW50dENoYXJ0U2VydmljZS5kYXRlRGlmZmVyZW5jZShcclxuICAgICAgZXZlbnRTdGFydERhdGUsXHJcbiAgICAgIHRoaXMuc3RhcnREYXRlXHJcbiAgICApO1xyXG4gICAgcmV0dXJuICgoZGF5c1ByaW9yVG9FdmVudFN0YXJ0IC0gMSkgLyB0aGlzLmNoYXJ0UGVyaW9kRGF5cykgKiAxMDA7XHJcbiAgfVxyXG5cclxuICAvKiogR2l2ZW4gYSBzdGFydCBhbmQgZW5kIGRhdGUgd2lsbCByZXR1cm4gZnVsbCBtb250aHMgYmV0d2VlbiBwZXJpb2QgYWxvbmcgd2l0aCBtb250aCBuYW1lcyBhbmRcclxuICAgKiByZWxhdGl2ZSBkdXJhdGlvbiBwZXJjZW50YWdlcyBmb3IgZWFjaCBtb250aFxyXG4gICAqL1xyXG4gIGdldE1vbnRocyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBNb250aEF4aXNbXSB7XHJcbiAgICBjb25zdCBzdGFydE1vbnRoID0gc3RhcnREYXRlLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBlbmRNb250aCA9IGVuZERhdGUuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IHRvdGFsRHVyYXRpb25EYXlzID0gTmd4R2FudHRDaGFydFNlcnZpY2UuZGF0ZURpZmZlcmVuY2UoXHJcbiAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgZW5kRGF0ZSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1vbnRoczogTW9udGhBeGlzW10gPSBbXTtcclxuXHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCBpTWF4ID0gZW5kTW9udGggLSBzdGFydE1vbnRoO1xyXG5cclxuICAgIGZvciAoaTsgaSA8PSBpTWF4OyBpKyspIHtcclxuICAgICAgY29uc3QgYWRqdXN0ZWRTdGFydERhdGUgPSBOZ3hHYW50dENoYXJ0U2VydmljZS5hZGRNb250aHMoc3RhcnREYXRlLCBpKTtcclxuICAgICAgY29uc3QgbW9udGhOYW1lID0gTmd4R2FudHRDaGFydFNlcnZpY2UuZ2V0TW9udGhOYW1lKGFkanVzdGVkU3RhcnREYXRlKTtcclxuICAgICAgY29uc3QgZGF5c0luTW9udGggPSBOZ3hHYW50dENoYXJ0U2VydmljZS5kYXlzSW5Nb250aChhZGp1c3RlZFN0YXJ0RGF0ZSk7XHJcbiAgICAgIGNvbnN0IG1vbnRoRHVyYXRpb25QZXJjZW50YWdlID0gKGRheXNJbk1vbnRoIC8gdG90YWxEdXJhdGlvbkRheXMpICogMTAwO1xyXG4gICAgICBtb250aHMucHVzaCh7XHJcbiAgICAgICAgbW9udGhOYW1lOiBtb250aE5hbWUsXHJcbiAgICAgICAgbW9udGhEdXJhdGlvblBlcmNlbnRhZ2U6IG1vbnRoRHVyYXRpb25QZXJjZW50YWdlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBtb250aHM7XHJcbiAgfVxyXG5cclxuICAvKiogR2l2ZW4gY29sb3VyIGZvciAqL1xyXG4gIGdldENvbG91cihyb3dJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnJvd3MubGVuZ3RoIDwgcm93SW5kZXgpIHtcclxuICAgICAgcmV0dXJuICcjNjRiNWY2JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJQYWxsZXRlW3Jvd0luZGV4XTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gIDwhLS0gaGVhZGVyIHJvdy0tPlxyXG4gIDxkaXYgY2xhc3M9XCJyb3ctYXhpc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdy10aXRsZVwiPkFjdGl2aXRpZXM8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb250aC1heGlzXCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3M9XCJtb250aFwiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IG1vbnRoIG9mIG1vbnRoQXhpc1wiXHJcbiAgICAgICAgW3N0eWxlLndpZHRoXT1cIm1vbnRoLm1vbnRoRHVyYXRpb25QZXJjZW50YWdlICsgJyUnXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IG1vbnRoLm1vbnRoTmFtZSB9fTwvc3BhblxyXG4gICAgICA+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBnYW50dCBjaGFydCByb3dzLS0+XHJcbiAgPGRpdiBjbGFzcz1cImdhbnR0LWNoYXJ0LXJvd1wiICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93czsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdy10aXRsZVwiPlxyXG4gICAgICB7eyByb3cubmFtZSB9fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93LWV2ZW50c1wiPlxyXG4gICAgICA8IS0tIGV2ZW50IHBlcmlvZCBibG9ja3MtLT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiZXZlbnQtcGVyaW9kIHRvb2x0aXBcIlxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBldmVudCBvZiByb3cuZXZlbnRzXCJcclxuICAgICAgICBbc3R5bGUubWFyZ2luLWxlZnRdPVwiZ2V0RXZlbnRPZmZzZXRQZXJjZW50YWdlKGV2ZW50LnN0YXJ0RGF0ZSkgKyAnJSdcIlxyXG4gICAgICAgIFtzdHlsZS53aWR0aF09XCJnZXRFdmVudER1cmF0aW9uUGVyY2VudGFnZShldmVudCkgKyAnJSdcIlxyXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImdldENvbG91cihpKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2ZW50LW5hbWVcIj57eyBldmVudC5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLXRleHRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3sgZXZlbnQubmFtZSB9fTogPC9zdHJvbmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHt7IGV2ZW50LnN0YXJ0RGF0ZSB8IGRhdGUgOiBcIm1lZGl1bURhdGVcIiB9fSAtXHJcbiAgICAgICAgICB7eyBldmVudC5lbmREYXRlIHwgZGF0ZSA6IFwibWVkaXVtRGF0ZVwiIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBldmVudCBtaWxlc3RvbmVzLS0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImV2ZW50LW1pbGVzdG9uZSB0b29sdGlwXCJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgbWlsZXN0b25lIG9mIHJvdy5taWxlc3RvbmVzXCJcclxuICAgICAgICBbc3R5bGUubWFyZ2luLWxlZnRdPVwiZ2V0RXZlbnRPZmZzZXRQZXJjZW50YWdlKG1pbGVzdG9uZS5kYXRlKSArICclJ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLXRleHRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3sgbWlsZXN0b25lLm5hbWUgfX06IDwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7eyBtaWxlc3RvbmUuZGF0ZSB8IGRhdGUgOiBcIm1lZGl1bURhdGVcIiB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gZ2FudHQgY2hhcnQgZ3JpZCBsaW5lcy0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1saW5lc1wiPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzcz1cImdyaWQtbGluZVwiXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbW9udGggb2YgbW9udGhBeGlzXCJcclxuICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJtb250aC5tb250aER1cmF0aW9uUGVyY2VudGFnZSArICclJ1wiXHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==