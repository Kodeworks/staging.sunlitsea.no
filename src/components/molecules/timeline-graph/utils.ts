import { Orientation } from './graphState';
import { TIMELINE_GRAPH_CONSTANTS } from './constants';

export function containerWidthToOrientation(width: number): Orientation {
  return width <= TIMELINE_GRAPH_CONSTANTS.verticalBreakpointWidth
    ? Orientation.vertical
    : Orientation.horizontal;
}

/**
 * Calculate how wide each year on graph should be.
 * Right now simplified implementation assigns each year same width
 * @param axis
 * @param totalWidth
 */
export function calculateAxisLengths(axis: number[], totalWidth: number): number[] {
  const elementLength = totalWidth / axis.length;
  return new Array(axis.length).fill(elementLength);
}

export function yearsMinMaxToListOfYears(yearsMinMax: [min: number, max: number]): number[] {
  const ar: number[] = [];
  let i = yearsMinMax[0];
  while (i <= yearsMinMax[1]) {
    ar.push(i);
    i++;
  }
  return ar;
}

export function eventBoxWidthToCompleteWidth(eventBoxWidth: number): number {
  return eventBoxWidth + TIMELINE_GRAPH_CONSTANTS.eventMarkerWidth;
}
