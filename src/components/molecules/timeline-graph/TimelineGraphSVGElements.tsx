import React from 'react';
import { GraphState, GraphStateStage } from './graphState';
import {
  EventPlacementOnTimeGraphAttribute,
  EventPlacementOnTimelineGraph,
  MarkerPlacementStyle,
  TimelinePointStyle,
} from './graphTypes';
import { TIMELINE_GRAPH_CONSTANTS } from './constants';
import { ReactComponent as CheckmarkIcon } from './svg/checkmark-icon.svg';
import { ReactComponent as ExpectedMilestoneIcon } from './svg/expected-milestone-marker.svg';

const MARKER_DIAMETER =
  TIMELINE_GRAPH_CONSTANTS.annotationIconDiameter + TIMELINE_GRAPH_CONSTANTS.generalPadding / 2;

interface TimelineGraphSVGElementsProps {
  loading: boolean;
  graphState: GraphState;
  svgRef: React.RefObject<SVGSVGElement>;
}

export const EventAnnotationMarker: React.FC<{
  coordinate: Coordinate;
  markerStyle: TimelinePointStyle;
}> = ({ coordinate, markerStyle }) => {
  const Marker = markerStyle === TimelinePointStyle.aim ? ExpectedMilestoneIcon : CheckmarkIcon;
  return (
    <Marker
      x={coordinate.x - TIMELINE_GRAPH_CONSTANTS.annotationIconDiameter / 2}
      y={coordinate.y - TIMELINE_GRAPH_CONSTANTS.annotationIconDiameter / 2}
      width={TIMELINE_GRAPH_CONSTANTS.annotationIconDiameter}
      height={TIMELINE_GRAPH_CONSTANTS.annotationIconDiameter}
      className="z-20"
    />
  );
};

export const TimelineGraphSVGElements: React.FC<TimelineGraphSVGElementsProps> = ({
  graphState,
  loading,
  svgRef,
}) => {
  if (loading || graphState.stage !== GraphStateStage.INITIALIZED) {
    return null;
  }
  const annotationLines: any[] = []; // eslint-disable-line
  const icons: any[] = []; // eslint-disable-line
  graphState.state.eventPlacements.forEach((eventPlacement, i) => {
    if (graphState.state.orientation === 'horizontal') {
      const coordinates = annotationElementsCoordinatesHorizontalLayout(graphState, eventPlacement);
      annotationLines.push(
        <line
          key={i}
          x1={coordinates[0].x}
          y1={coordinates[0].y}
          x2={coordinates[1].x}
          y2={coordinates[1].y}
          stroke={'#e6e6e6'}
          strokeWidth={TIMELINE_GRAPH_CONSTANTS.annotationLineStrokeWidth}
        />
      );
      icons.push(
        <EventAnnotationMarker
          coordinate={coordinates[1]}
          markerStyle={graphState.state.events[i].markerStyle}
        />
      );
    } else if (graphState.state.orientation === 'vertical') {
      const coordinate = annotationElementsCoordinatesVerticalLayout(graphState, eventPlacement);
      icons.push(
        <EventAnnotationMarker
          coordinate={coordinate}
          markerStyle={graphState.state.events[i].markerStyle}
        />
      );
      if (
        eventPlacement.attributes?.some(
          (_) => _ === EventPlacementOnTimeGraphAttribute.VERTICAL_COMBINE_WITH_PREVIOUS
        )
      ) {
        const previousCoordinate = annotationElementsCoordinatesVerticalLayout(
          graphState,
          graphState.state.eventPlacements[i - 1]
        );
        annotationLines.push(
          <line
            key={i}
            x1={coordinate.x}
            y1={coordinate.y}
            x2={previousCoordinate.x}
            y2={previousCoordinate.y}
            stroke={'#e6e6e6'}
            strokeWidth={TIMELINE_GRAPH_CONSTANTS.annotationLineStrokeWidth}
          />
        );
      }
    }
  });
  return (
    <svg ref={svgRef} className="absolute top-0 left-0 z-10 w-full h-full">
      {annotationLines}
      {icons}
    </svg>
  );
};

interface Coordinate {
  x: number;
  y: number;
}

export function annotationElementsCoordinatesHorizontalLayout(
  graphState: GraphState,
  eventPlacement: EventPlacementOnTimelineGraph
): [Coordinate, Coordinate] {
  if (graphState.stage !== GraphStateStage.INITIALIZED) {
    throw new Error('Unexpected state');
  }
  const x = (() => {
    if (eventPlacement.markerPlacementStyle === MarkerPlacementStyle.before) {
      return eventPlacement.x - MARKER_DIAMETER / 2;
    } else if (eventPlacement.markerPlacementStyle === MarkerPlacementStyle.after) {
      return eventPlacement.x + eventPlacement.eventBoxWidth + MARKER_DIAMETER / 2;
    } else {
      throw new Error('Not implemented TimelineGraphSVGElements');
    }
  })();
  const yTop = TIMELINE_GRAPH_CONSTANTS.yearAxisHorizontalHeight;
  const yBot =
    TIMELINE_GRAPH_CONSTANTS.yearAxisHorizontalHeight +
    eventPlacement.y +
    eventPlacement.completeHeight / 2;
  return [
    {
      x,
      y: yTop,
    },
    { x, y: yBot },
  ];
}

export function annotationElementsCoordinatesVerticalLayout(
  graphState: GraphState,
  eventPlacement: EventPlacementOnTimelineGraph
): Coordinate {
  return {
    x:
      TIMELINE_GRAPH_CONSTANTS.yearAxisVerticalWidth +
      TIMELINE_GRAPH_CONSTANTS.annotationIconDiameter / 2 +
      TIMELINE_GRAPH_CONSTANTS.generalPadding,
    y: eventPlacement.y + eventPlacement.completeHeight / 2,
  };
}
