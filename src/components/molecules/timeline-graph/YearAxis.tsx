import React from 'react';
import { GraphState, Orientation } from './graphState';
import { TIMELINE_GRAPH_CONSTANTS } from './constants';

interface YearAxisProps {
  graphState: GraphState['state'];
  loading: boolean;
}

const yearColors = ['#ccd4f1', '#b5bce9', '#989fd9', '#737cc8'];

export const YearAxis: React.FC<YearAxisProps> = ({ graphState, loading }) => {
  if (graphState === null) {
    return null;
  }
  if (graphState.orientation === Orientation.horizontal) {
    return (
      <div
        className="absolute top-0 left-0 flex graph-html-axis"
        style={{
          height: `${TIMELINE_GRAPH_CONSTANTS.yearAxisHorizontalHeight}px`,

          visibility: loading ? 'hidden' : 'visible',
        }}
      >
        {graphState.axis.map((year, i) => (
          <div
            key={year}
            style={{
              width: `${graphState.axisLengths[i]}px`,
              backgroundColor: yearColors[i],
            }}
            className="flex items-center justify-center h-12 text-2xl font-bold font-headline"
          >
            {year}
          </div>
        ))}
      </div>
    );
  }
  if (graphState.orientation === Orientation.vertical) {
    return (
      <div className="absolute top-0 left-0 flex flex-col graph-html-axis">
        {graphState.axis.map((year, i) => (
          <div
            key={year}
            style={{
              height: `${graphState.axisLengths[i]}px`,
              width: `${TIMELINE_GRAPH_CONSTANTS.yearAxisVerticalWidth}px`,
              backgroundColor: yearColors[i],

              visibility: loading ? 'hidden' : 'visible',
            }}
            className="flex items-center justify-center h-12 text-2xl font-bold font-headline"
          >
            <div className="-rotate-90">{year}</div>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
