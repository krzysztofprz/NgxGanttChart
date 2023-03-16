import { NgModule } from '@angular/core';
import { NgxGanttChartComponent } from './ngx-gantt-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { NgxGanttChartService } from './ngx-gantt-chart.service';
import * as i0 from "@angular/core";
export class NgxGanttChartModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbnR0LWNoYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1nYW50dC1jaGFydC9zcmMvbGliL25neC1nYW50dC1jaGFydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFRakUsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQUpmLHNCQUFzQixhQUQzQixhQUFhLEVBQUUsWUFBWSxFQUFFLFFBQVEsYUFFckMsc0JBQXNCLEVBQUUsUUFBUTtpSEFHL0IsbUJBQW1CLGFBRm5CLENBQUMsb0JBQW9CLENBQUMsWUFIdkIsYUFBYSxFQUFFLFlBQVk7MkZBSzFCLG1CQUFtQjtrQkFOL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQztvQkFDaEQsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQztvQkFDM0MsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4R2FudHRDaGFydENvbXBvbmVudCB9IGZyb20gJy4vbmd4LWdhbnR0LWNoYXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5neEdhbnR0Q2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZ2FudHQtY2hhcnQuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBDb21tb25Nb2R1bGUsIERhdGVQaXBlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOZ3hHYW50dENoYXJ0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTmd4R2FudHRDaGFydENvbXBvbmVudCwgRGF0ZVBpcGVdLFxyXG4gIHByb3ZpZGVyczogW05neEdhbnR0Q2hhcnRTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEdhbnR0Q2hhcnRNb2R1bGUge31cclxuIl19