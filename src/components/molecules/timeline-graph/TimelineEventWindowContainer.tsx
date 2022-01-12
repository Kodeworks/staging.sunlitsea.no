import React from 'react';
import { EventPlacementOnTimelineGraph, TimelineEvent } from './graphTypes';
import { TimelineEventWindow } from './TimelineEventWindow';
import { TIMELINE_GRAPH_CONSTANTS } from './constants';
import { GraphState } from './graphState';
import { useTrackRealEventWindowSizes } from './useTrackRealEventWindowSizes';

interface TimelineEventWindowContainerProps {
  event: TimelineEvent;
  eventPlacement: EventPlacementOnTimelineGraph;
  graphState: GraphState;
  updateRealEventWindowSize: ReturnType<
    typeof useTrackRealEventWindowSizes
  >['updateRealEventWindowSize'];
  index: number;
  graphDimensions: { width: number | undefined; height: number | undefined };
  loading: boolean;
}

export const TimelineEventWindowContainer: React.FC<TimelineEventWindowContainerProps> = ({
  event,
  eventPlacement,
  graphState,
  updateRealEventWindowSize,
  index,
  graphDimensions,
  loading,
}) => {
  if (graphState.state === null) {
    return null;
  }
  if (graphState.state.orientation === 'horizontal') {
    return (
      <div
        className="graph-html-event-container"
        style={{
          height: `${eventPlacement?.completeHeight ?? 205}px`,
          width: `${eventPlacement?.eventBoxWidth ?? 200}px`,
          position: 'absolute',
          top: `${TIMELINE_GRAPH_CONSTANTS.axisThickness + eventPlacement?.y}px`,
          left: `${eventPlacement?.x}px`,
          lineHeight: `${TIMELINE_GRAPH_CONSTANTS.eventBoxLineHeight}px`,
          overflow: 'hidden',
          visibility: loading ? 'hidden' : 'visible',
        }}
      >
        <TimelineEventWindow event={event} sizeUpdater={updateRealEventWindowSize} index={index} />
      </div>
    );
  }
  if (graphState.state.orientation === 'vertical') {
    return (
      <div
        className="graph-html-event-container"
        style={{
          width: `${
            (graphDimensions.width ?? window.innerWidth) -
            TIMELINE_GRAPH_CONSTANTS.generalPadding * 5 -
            TIMELINE_GRAPH_CONSTANTS.yearAxisVerticalWidth -
            TIMELINE_GRAPH_CONSTANTS.annotationIconDiameter
          }px`,
          position: 'absolute',
          top: `${eventPlacement?.y}px`,
          left:
            TIMELINE_GRAPH_CONSTANTS.yearAxisVerticalWidth +
            TIMELINE_GRAPH_CONSTANTS.generalPadding * 3 +
            TIMELINE_GRAPH_CONSTANTS.annotationIconDiameter,
          lineHeight: `${TIMELINE_GRAPH_CONSTANTS.eventBoxLineHeight}px`,
          overflow: 'hidden',
          visibility: loading ? 'hidden' : 'visible',
        }}
      >
        <TimelineEventWindow event={event} sizeUpdater={updateRealEventWindowSize} index={index} />
      </div>
    );
  }
  return null;
};
