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
        className="graph-html-axis absolute top-0 left-0 flex"
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
            className="h-11 flex justify-center items-center"
          >
            {year}
          </div>
        ))}
      </div>
    );
  }
  if (graphState.orientation === Orientation.vertical) {
    return (
      <div className="graph-html-axis absolute top-0 left-0 flex flex-col">
        {graphState.axis.map((year, i) => (
          <div
            key={year}
            style={{
              height: `${graphState.axisLengths[i]}px`,
              width: `${TIMELINE_GRAPH_CONSTANTS.yearAxisVerticalWidth}px`,
              backgroundColor: yearColors[i],

              visibility: loading ? 'hidden' : 'visible',
            }}
            className="h-11 flex justify-center items-center"
          >
            {year}
          </div>
        ))}
      </div>
    );
  }
  return null;
};
