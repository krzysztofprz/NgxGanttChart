import { IGanttChartEvent } from './IGanttChartEvent';
import { IGanttChartMilestone } from './IGanttChartMilestone';
export interface IGanttCharRow {
    name: string;
    events: IGanttChartEvent[];
    milestones: IGanttChartMilestone[];
}
