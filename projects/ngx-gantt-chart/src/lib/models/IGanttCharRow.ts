import { IGanttChartEvent } from './IGanttChartEvent';
import { IGanttChartMilestone } from './IGanttChartMilestone';

export interface IGanttCharRow {
  name: string;
  startDate: Date;
  endDate: Date;
  monthPercentage: number;
  leftOffset: number;
  // events: IGanttChartEvent[];
  // milestones: IGanttChartMilestone[];
}
