import { IGanttChartRow } from './IGanttCharRow';

export interface IGanttCharRowBlock extends IGanttChartRow {
  monthPercentage: number;
  leftOffset: number;
}
