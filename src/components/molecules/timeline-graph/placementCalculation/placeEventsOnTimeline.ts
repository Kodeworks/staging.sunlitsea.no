import {
  EventPlacementOn1DTimelineGraph,
  EventPlacementOnTimeGraphAttribute,
  EventPlacementOnTimelineGraph,
  EventWindowSize,
  MarkerPlacementStyle,
} from '../graphTypes';
import {
  getDateAxisCoordinateForEvent,
  getDateAxisCoordinateForEventVertical,
  sum,
} from './commonUtils';
import { TIMELINE_GRAPH_CONSTANTS } from '../constants';
import { InitializedGraphState, Orientation } from '../graphState';
import { calculateAxisLengths, eventBoxWidthToCompleteWidth } from '../utils';
import { eventPlacementBoxBounds, findHighestAvailableStretch } from './horizontalUtils';

/**
 * Takes timeline event list and axis information.
 * Places the events on the graph - X and Y coordinates.
 * @param graphState
 * @param realEventWindowSizes
 * @param dimensions
 * @param newOrientation
 */
export function placeEventsOnTimeline(
  graphState: InitializedGraphState['state'],
  realEventWindowSizes: EventWindowSize[],
  dimensions: { width: number; height: number },
  newOrientation?: InitializedGraphState['state']['orientation']
): { axisLengths: number[]; eventPlacements: EventPlacementOnTimelineGraph[] } {
  if ((newOrientation ?? graphState.orientation) === 'horizontal') {
    const axisLengths = calculateAxisLengths(graphState.axis, dimensions.width);
    return {
      axisLengths,
      eventPlacements: placeEventsOnTimelineHorizontal(
        graphState,
        realEventWindowSizes,
        axisLengths,
        newOrientation
      ),
    };
  } else {
    return placeEventsOnTimelineVertical(
      graphState,
      realEventWindowSizes
    );
  }
}

interface Line1D {
  relativePosition: number; // number between 0 and 1, position of event on Y axis
  length: number;
}
interface Bounds1D {
  top: number;
  bottom: number;
}
function calculateBounds1D(L: number, line: Line1D) {
  return {
    top: line.relativePosition * L - line.length,
    bottom: line.relativePosition * L + line.length,
  };
}
function boundsIntersect(a: Bounds1D, b: Bounds1D) {
  return (b.bottom > a.top && b.top < a.top) || (b.top < a.bottom && b.bottom > a.bottom);
}
function calculatePressure(L: number, lines: Line1D[], i: number): Pressure {
  const line = lines[i];
  const bounds = calculateBounds1D(L, line);
  if (i === 0) {
    const elementBelow = lines[1];
    const boundsElementBelow = calculateBounds1D(L, elementBelow);
    const pressure = {
      above: false,
      below: false,
    };
    if (boundsIntersect(bounds, boundsElementBelow)) {
      pressure.below = true;
    }
    if (bounds.top < 0) {
      pressure.above = true;
    }
    return pressure;
  }
  if (i === lines.length - 1) {
    const elementAbove = lines[i - 1];
    const boundsElementAbove = calculateBounds1D(L, elementAbove);
    const pressure = {
      above: false,
      below: false,
    };
    if (boundsIntersect(bounds, boundsElementAbove)) {
      pressure.above = true;
    }
    if (bounds.bottom > L) {
      pressure.below = true;
    }
    return pressure;
  }
  const elementAbove = lines[i - 1];
  const boundsElementAbove = calculateBounds1D(L, elementAbove);
  const elementBelow = lines[i];
  const boundsElementBelow = calculateBounds1D(L, elementBelow);
  const pressure = {
    above: false,
    below: false,
  };
  if (boundsIntersect(bounds, boundsElementAbove)) {
    pressure.above = true;
  }
  if (boundsIntersect(bounds, boundsElementBelow)) {
    pressure.below = true;
  }
  return pressure;
}
function selectPosition(
  L: number,
  line: Line1D,
  pressure: Pressure
): { bounds: Bounds1D; eventPlacement: EventPlacementOn1DTimelineGraph } {
  if (!pressure.above && pressure.below) {
    const y = L * line.relativePosition - line.length;
    return {
      bounds: {
        top: L * line.relativePosition - line.length,
        bottom: y + line.length,
      },
      eventPlacement: {
        y,
        height: line.length,
        markerPlacementStyle: MarkerPlacementStyle.after,
      },
    };
  } else {
    const y = L * line.relativePosition;
    return {
      bounds: {
        top: L * line.relativePosition,
        bottom: y + line.length,
      },
      eventPlacement: {
        y,
        height: line.length,
        markerPlacementStyle: MarkerPlacementStyle.before,
      },
    };
  }
}
function increaseLFromIntersection(L: number, boundsA: Bounds1D, boundsB: Bounds1D): number {
  if (boundsA.top === boundsB.top) {
    return L * ((TIMELINE_GRAPH_CONSTANTS.maximumVerticalLIncrement - 1) * 0.5 + 1);
  }
  const [boundsUpper, boundsLower] =
    boundsA.top < boundsB.top ? [boundsA, boundsB] : [boundsB, boundsA];
  const newL = (L * (boundsUpper.bottom - boundsUpper.top)) / (boundsLower.top - boundsUpper.top);
  if (newL <= L) {
    throw new Error('Something went wrong in increaseLFromIntersection');
  }
  return Math.min(L * TIMELINE_GRAPH_CONSTANTS.maximumVerticalLIncrement, newL); // need to math min because of corner-case
}
interface Pressure {
  above: boolean;
  below: boolean;
}

export function placeEventsOnTimelineVertical(
  graphState: InitializedGraphState['state'],
  realEventWindowSizes: EventWindowSize[]
): { eventPlacements: EventPlacementOnTimelineGraph[]; axisLengths: number[] } {
  const lInit = sum(realEventWindowSizes.map((size) => size.height));
  const lines: Line1D[] = graphState.events.map((event, i) => {
    const size = realEventWindowSizes[i];
    return {
      length: size.height,
      relativePosition: getDateAxisCoordinateForEventVertical(event, graphState.axis),
    };
  });
  const combinedLinesLookup: number[] = [];
  const combinedLines = (() => {
    const _combinedLines: Line1D[] = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (i === 0) {
        combinedLinesLookup[i] = 0;
        _combinedLines.push({ ...line });
      } else {
        if (line.relativePosition === _combinedLines[_combinedLines.length - 1].relativePosition) {
          _combinedLines[_combinedLines.length - 1].length += line.length;
          combinedLinesLookup[i] = _combinedLines.length - 1;
        } else {
          _combinedLines.push({ ...line });
          combinedLinesLookup[i] = _combinedLines.length - 1;
        }
      }
    }
    return _combinedLines;
  })();

  let done = false;
  let L = lInit;
  let eventPlacements: EventPlacementOn1DTimelineGraph[] = [];
  let boundsList: Bounds1D[] = [];
  let forceCombine = false;
  while (!done) {
    const pressures = combinedLines.map((line, i) => calculatePressure(L, combinedLines, i));
    let i: number;
    for (i = 0; i < combinedLines.length; i++) {
      // try to place event #i
      const line = combinedLines[i];
      const pressure = pressures[i];
      const { bounds, eventPlacement } = selectPosition(L, line, pressure);
      eventPlacements.push(eventPlacement);
      boundsList.push(bounds);
      if (i > 0 && boundsIntersect(bounds, boundsList[i - 1])) {
        if (forceCombine) {
          // revert current operation, modify, reapply
          boundsList.splice(boundsList.length - 1, 1);
          eventPlacements.splice(eventPlacements.length - 1, 1);
          const newBounds: Bounds1D = {
            top: boundsList[i - 1].bottom,
            bottom: boundsList[i - 1].bottom + line.length,
          };
          const newEventPlacement: EventPlacementOn1DTimelineGraph = {
            y: boundsList[i - 1].bottom,
            height: line.length,
            markerPlacementStyle: MarkerPlacementStyle.before,
          };
          eventPlacements.push(newEventPlacement);
          boundsList.push(newBounds);
          if (i === combinedLines.length - 1) {
            done = true;
          }
        } else {
          // need new L
          const newLCandidate = increaseLFromIntersection(L, boundsList[i - 1], bounds);
          if (newLCandidate > TIMELINE_GRAPH_CONSTANTS.maximumVerticalLTotalIncrease * lInit) {
            L = TIMELINE_GRAPH_CONSTANTS.maximumVerticalLTotalIncrease * lInit;
            // todo implement force-combine layout where close items are combined
            forceCombine = true;
          } else {
            L = newLCandidate;
          }
          eventPlacements = [];
          boundsList = [];
          break;
        }
      } else if (i === combinedLines.length - 1) {
        done = true;
      }
    }
  }

  const translatedEventPlacements: EventPlacementOnTimelineGraph[] = [];
  combinedLinesLookup.forEach((placementIndex, index) => {
    // This means this [i] event is in thes same group as previous
    const combinedWithPrevious = index > 0 && combinedLinesLookup[index - 1] === placementIndex;
    const y = combinedWithPrevious
      ? translatedEventPlacements[index - 1].y + translatedEventPlacements[index - 1].completeHeight
      : eventPlacements[placementIndex].y;
    translatedEventPlacements.push({
      y,
      x: 0,
      markerPlacementStyle: eventPlacements[placementIndex].markerPlacementStyle,
      completeHeight: realEventWindowSizes[index].height,
      eventBoxWidth: 0,
      completeWidth: 0,
    });
    if (combinedWithPrevious) {
      translatedEventPlacements[index].attributes = [
        EventPlacementOnTimeGraphAttribute.VERTICAL_COMBINE_WITH_PREVIOUS,
      ];
    }
  });
  return {
    eventPlacements: translatedEventPlacements,
    axisLengths: graphState.axis.map(() => L / graphState.axis.length),
  };
}

export function placeEventsOnTimelineHorizontal(
  graphState: InitializedGraphState['state'],
  realEventWindowSizes: EventWindowSize[],
  newAxisLengsh?: InitializedGraphState['state']['axisLengths'],
  newOrientation?: InitializedGraphState['state']['orientation']
): EventPlacementOnTimelineGraph[] {
  const axisLengths = newAxisLengsh !== undefined ? newAxisLengsh : graphState.axisLengths;
  const orientation = newOrientation !== undefined ? newOrientation : graphState.orientation;
  const eventPlacements: EventPlacementOnTimelineGraph[] = [];
  // Place events on x axis with initial configuration
  for (let i = 0; i < graphState.events.length; i++) {
    const event = graphState.events[i];
    const x = getDateAxisCoordinateForEvent(event, graphState.axis, axisLengths);
    const tooCloseToGraphEnd =
      orientation === Orientation.horizontal &&
      x + TIMELINE_GRAPH_CONSTANTS.eventMarkerWidth + TIMELINE_GRAPH_CONSTANTS.eventBoxWidth >
        sum(axisLengths);
    const [adjustedX, markerPlacementStyle] = (() => {
      if (tooCloseToGraphEnd) {
        return [
          x - TIMELINE_GRAPH_CONSTANTS.eventBoxWidth - TIMELINE_GRAPH_CONSTANTS.eventMarkerWidth,
          MarkerPlacementStyle.after,
        ];
      }
      return [x + TIMELINE_GRAPH_CONSTANTS.eventMarkerWidth, MarkerPlacementStyle.before];
    })();
    eventPlacements[i] = {
      x: adjustedX,
      y: 0,
      markerPlacementStyle,
      completeHeight: realEventWindowSizes[i].height,
      eventBoxWidth: realEventWindowSizes[i].width,
      completeWidth: eventBoxWidthToCompleteWidth(realEventWindowSizes[i].width),
    };
  }
  // Adjust events placement on Y axis
  const boxBounds: Array<ReturnType<typeof eventPlacementBoxBounds>> = [];
  for (let i = 0; i < eventPlacements.length; i++) {
    const placement = eventPlacements[i];
    const initialBounds = eventPlacementBoxBounds(placement);
    const potentialyInterferingBoxBounds = boxBounds.slice(0, i);
    const interferingBoxBounds = potentialyInterferingBoxBounds.filter(
      (_) => _.bottomRight.x > initialBounds.topLeft.x
    );
    const highestAvailableStretch = findHighestAvailableStretch(
      interferingBoxBounds.map((_) => ({ top: _.topLeft.y, bottom: _.bottomRight.y })),
      placement.completeHeight + TIMELINE_GRAPH_CONSTANTS.eventBoxVerticalPaddingSmall
    );
    placement.y = (() => {
      if (
        highestAvailableStretch.bottom - highestAvailableStretch.top >=
        2 * TIMELINE_GRAPH_CONSTANTS.eventBoxVerticalPaddingNormal + placement.completeHeight
      ) {
        return highestAvailableStretch.top + TIMELINE_GRAPH_CONSTANTS.eventBoxVerticalPaddingNormal;
      } else {
        return highestAvailableStretch.top + TIMELINE_GRAPH_CONSTANTS.eventBoxVerticalPaddingSmall;
      }
    })();
    boxBounds.push(eventPlacementBoxBounds(placement));
  }
  return eventPlacements;
}
