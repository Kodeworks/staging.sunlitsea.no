import React, { useRef } from 'react';
import { YearAxis } from './YearAxis';
import { TimelineEvent } from './graphTypes';
import { useTimelineGraph } from './useTimelineGraph';
import { TimelineEventWindowContainer } from './TimelineEventWindowContainer';
import { GraphStateStage } from './graphState';
import { TIMELINE_GRAPH_CONSTANTS } from './constants';
import { TimelineGraphSVGElements } from './TimelineGraphSVGElements';

export interface TimelineGraphProps {
  yearsToShow: [minYear: number, maxYear: number];
  displayArrowOnAxisEnd: boolean;
  events: TimelineEvent[];
}

export const TimelineGraph: React.FC<TimelineGraphProps> = (props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, width, height, graphState, updateRealEventWindowSize, loading } = useTimelineGraph(
    props.events,
    props.yearsToShow
  );

  return (
    <div
      className="relative mt-8 mb-8 overflow-hidden timeline-graph-container"
      ref={ref}
      style={{
        height:
          graphState.stage === GraphStateStage.INITIALIZED
            ? `${graphState.state.graphHeight ?? TIMELINE_GRAPH_CONSTANTS.initialGraphHeight}px`
            : `${TIMELINE_GRAPH_CONSTANTS.initialGraphHeight}px`,
      }}
    >
      <TimelineGraphSVGElements loading={loading} graphState={graphState} svgRef={svgRef} />
      <div className="absolute top-0 left-0 z-30 graph-html-elements">
        <YearAxis graphState={graphState.state} loading={loading} />
        <div className="absolute graph-html-events">
          {graphState.state !== null &&
            graphState.state.events.map((event, i) => {
              return (
                <TimelineEventWindowContainer
                  key={i}
                  index={i}
                  eventPlacement={graphState.state.eventPlacements[i]}
                  event={event}
                  updateRealEventWindowSize={updateRealEventWindowSize}
                  graphState={graphState}
                  graphDimensions={{ width, height }}
                  loading={loading}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
