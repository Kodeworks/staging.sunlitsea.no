// utils for horizontal placement

import { TIMELINE_GRAPH_CONSTANTS } from '../constants';
import { EventPlacementOnTimelineGraph, MarkerPlacementStyle} from '../graphTypes';

/**
 * Finds lowest possible range with free at least "neededSpace" pixels available given a list of occupied ranges.
 * @param occupiedRanges
 * @param requiredLength
 */
export function findHighestAvailableStretch(
  occupiedRanges: Array<{ top: number; bottom: number }>,
  requiredLength: number
): { top: number; bottom: number } {
  if (occupiedRanges.length === 0) {
    return {
      top: 0,
      bottom: 999999,
    };
  }
  const sortedRanges = occupiedRanges.sort((a, b) => a.top - b.top);
  let i = 0;
  if (sortedRanges[0].top > requiredLength) {
    return {
      top: 0,
      bottom: sortedRanges[0].top,
    };
  }
  while (i < sortedRanges.length - 1) {
    if (sortedRanges[i + 1].top - sortedRanges[i].bottom > requiredLength) {
      return {
        top: sortedRanges[i].bottom,
        bottom: sortedRanges[i + 1].top,
      };
    }
    i++;
  }
  return {
    top: sortedRanges[sortedRanges.length - 1].bottom,
    bottom: 999999,
  };
}

export function eventPlacementBoxBounds(eventPlacement: EventPlacementOnTimelineGraph): {
  topLeft: { x: number; y: number };
  bottomRight: { x: number; y: number };
} {
  if (
    eventPlacement.markerPlacementStyle === MarkerPlacementStyle.before ||
    eventPlacement.markerPlacementStyle === MarkerPlacementStyle.after
  ) {
    return {
      topLeft: { x: eventPlacement.x, y: eventPlacement.y },
      bottomRight: {
        x:
          eventPlacement.x +
          TIMELINE_GRAPH_CONSTANTS.eventMarkerWidth +
          eventPlacement.eventBoxWidth,
        y: eventPlacement.completeHeight + eventPlacement.y,
      },
    };
  }
  if (eventPlacement.markerPlacementStyle === MarkerPlacementStyle.within) {
    throw new Error('not implemented 2');
  }
  throw new Error('not implemented 3');
}
