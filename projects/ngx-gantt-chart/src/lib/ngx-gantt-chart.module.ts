import { NgModule } from '@angular/core';
import { NgxGanttChartComponent } from './ngx-gantt-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { NgxGanttChartService } from './ngx-gantt-chart.service';

@NgModule({
  imports: [BrowserModule, CommonModule, DatePipe],
  declarations: [NgxGanttChartComponent],
  exports: [NgxGanttChartComponent, DatePipe],
  providers: [NgxGanttChartService],
})
export class NgxGanttChartModule {}
