import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxGanttChartComponent } from './ngx-gantt-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';

export let LOCALE: string = 'en-US';

@NgModule({
  imports: [BrowserModule, CommonModule, DatePipe],
  declarations: [NgxGanttChartComponent],
  exports: [NgxGanttChartComponent, DatePipe],
  providers: [],
})
export class NgxGanttChartModule {
  static forRoot(locale: string): ModuleWithProviders<NgxGanttChartModule> {
    if (locale) {
      LOCALE = locale;
    }

    return {
      ngModule: NgxGanttChartModule,
      providers: [],
    };
  }
}
