import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
// @Injectable({
//   providedIn: 'root',
//   providedIn: NgxGanttChartModule,
// })
export class NgxGanttChartService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbnR0LWNoYXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ2FudHQtY2hhcnQvc3JjL2xpYi9uZ3gtZ2FudHQtY2hhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxnQkFBZ0I7QUFDaEIsd0JBQXdCO0FBQ3hCLHFDQUFxQztBQUNyQyxLQUFLO0FBRUwsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixnQkFBZSxDQUFDO0lBRWhCLGlFQUFpRTtJQUNqRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQWMsRUFBRSxNQUFZO1FBQzNDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUNMLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDakIsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUNuQixFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQ3JELENBQUM7SUFDSixDQUFDO0lBRUQsK0RBQStEO0lBQy9ELE1BQU0sQ0FBQyxjQUFjLENBQ25CLE9BQWEsRUFDYixTQUFlLEVBQ2Ysb0JBQTZCLEtBQUs7UUFFbEMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVoQyxNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFeEMsOENBQThDO1FBQzlDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ25CLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFDckIsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUNsQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQ2xCLENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUNuQixTQUFTLENBQUMsV0FBVyxFQUFFLEVBQ3ZCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUNwQixDQUFDO1FBRUYsT0FBTyxDQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNqRCxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVELHFFQUFxRTtJQUNyRSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVU7UUFDNUIsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxxRkFBcUY7SUFDckYsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFVO1FBQzNCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hFLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVUsRUFBRSxXQUFtQjtRQUM5QyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsaUZBQWlGO1FBQ2pGLE1BQU0sZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekUsT0FBTyxJQUFJLElBQUksQ0FDYixlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FDbkUsQ0FBQztJQUNKLENBQUM7O2lIQTdEVSxvQkFBb0I7cUhBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hHYW50dENoYXJ0TW9kdWxlIH0gZnJvbSAnLi9uZ3gtZ2FudHQtY2hhcnQubW9kdWxlJztcclxuXHJcbi8vIEBJbmplY3RhYmxlKHtcclxuLy8gICBwcm92aWRlZEluOiAncm9vdCcsXHJcbi8vICAgcHJvdmlkZWRJbjogTmd4R2FudHRDaGFydE1vZHVsZSxcclxuLy8gfSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmd4R2FudHRDaGFydFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLyoqIEdpdmVuIGEgc3RhcnQgYW5kIGVuZCBkYXRlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBpbiBtb250aHMgKi9cclxuICBzdGF0aWMgbW9udGhEaWZmKGRhdGVGcm9tOiBEYXRlLCBkYXRlVG86IERhdGUpOiBudW1iZXIge1xyXG4gICAgZGF0ZUZyb20gPSBuZXcgRGF0ZShkYXRlRnJvbSk7XHJcbiAgICBkYXRlVG8gPSBuZXcgRGF0ZShkYXRlVG8pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZGF0ZVRvLmdldE1vbnRoKCkgLVxyXG4gICAgICBkYXRlRnJvbS5nZXRNb250aCgpICtcclxuICAgICAgMTIgKiAoZGF0ZVRvLmdldEZ1bGxZZWFyKCkgLSBkYXRlRnJvbS5nZXRGdWxsWWVhcigpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiBHaXZlbiBhIHN0YXJ0IGFuZCBlbmQgZGF0ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyAqL1xyXG4gIHN0YXRpYyBkYXRlRGlmZmVyZW5jZShcclxuICAgIGVuZERhdGU6IERhdGUsXHJcbiAgICBzdGFydERhdGU6IERhdGUsXHJcbiAgICBpbmx1c2l2ZU9mRW5kRGF0ZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgKTogbnVtYmVyIHtcclxuICAgIGVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlKTtcclxuICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcblxyXG4gICAgY29uc3QgX01TX1BFUl9EQVkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xyXG5cclxuICAgIC8vIERpc2NhcmQgdGhlIHRpbWUgYW5kIHRpbWUtem9uZSBpbmZvcm1hdGlvbi5cclxuICAgIGNvbnN0IHV0YzEgPSBEYXRlLlVUQyhcclxuICAgICAgZW5kRGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICBlbmREYXRlLmdldE1vbnRoKCksXHJcbiAgICAgIGVuZERhdGUuZ2V0RGF0ZSgpXHJcbiAgICApO1xyXG4gICAgY29uc3QgdXRjMiA9IERhdGUuVVRDKFxyXG4gICAgICBzdGFydERhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgc3RhcnREYXRlLmdldE1vbnRoKCksXHJcbiAgICAgIHN0YXJ0RGF0ZS5nZXREYXRlKClcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgTWF0aC5hYnMoTWF0aC5mbG9vcigodXRjMiAtIHV0YzEpIC8gX01TX1BFUl9EQVkpKSArXHJcbiAgICAgIChpbmx1c2l2ZU9mRW5kRGF0ZSA/IDIgOiAxKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGlzIG1ldGhvZCB3aWxsIGdpdmUgeW91IGEgbW9udGggbmFtZSBiYXNlZCBvbiBhIG1vbnRoIG51bWJlciAqL1xyXG4gIHN0YXRpYyBnZXRNb250aE5hbWUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywgeyBtb250aDogJ3Nob3J0JyB9KS5mb3JtYXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogR2l2ZW4gYSBkYXRlIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGUgc3BlY2lmaWVkIG1vbnRoICovXHJcbiAgc3RhdGljIGRheXNJbk1vbnRoKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZE1vbnRocyhkYXRlOiBEYXRlLCBtb250aHNUb0FkZDogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAvLyBhbHdheXMgYXNzdW1lIGp1c3Qgc2hpZnRpbmcgb25lIG1vbnRoIGFjcm9zcyBzbyBzZXQgZGF0ZSB0byBmaXJzdCBkYXkgb2YgbW9udGhcclxuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKTtcclxuICAgIHJldHVybiBuZXcgRGF0ZShcclxuICAgICAgZmlyc3REYXlPZk1vbnRoLnNldE1vbnRoKG1vbnRoc1RvQWRkICsgZmlyc3REYXlPZk1vbnRoLmdldE1vbnRoKCkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=