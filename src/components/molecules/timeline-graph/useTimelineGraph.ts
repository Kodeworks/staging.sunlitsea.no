import { useTrackContainerSize } from './useTrackContainerSize';
import { useEffect, useMemo, useReducer } from 'react';
import { placeEventsOnTimeline } from './placementCalculation/placeEventsOnTimeline';
import { useTrackRealEventWindowSizes } from './useTrackRealEventWindowSizes';
import { graphStateReducer, GraphStateStage } from './graphState';
import {
  calculateAxisLengths,
  containerWidthToOrientation,
  yearsMinMaxToListOfYears,
} from './utils';
import { usePrevious } from './placementCalculation/commonUtils';
import { TimelineEvent } from './graphTypes';

export function useTimelineGraph( // eslint-disable-line
  events: TimelineEvent[],
  yearsToShow: [minYear: number, maxYear: number]
) {
  const { width, height, ref } = useTrackContainerSize();
  const previousWidthHeight = usePrevious({ width, height });

  const { realEventWindowSizes, updateRealEventWindowSize, resetRealEventWindowSizes } =
    useTrackRealEventWindowSizes(events);
  const [graphState, dispatchGraphState] = useReducer(graphStateReducer, {
    state: null,
    stage: GraphStateStage.UNINITIALIZED,
  });

  /**
   * Updates graphState. State-machine going uninitialized->initialized-no-placement->initialized-with-placement->...
   */
  useEffect(() => {
    if (width === undefined || height === undefined) {
      return;
    }
    // Graph uninitialized => initialized-without-placement
    if (graphState.stage === GraphStateStage.UNINITIALIZED) {
      const orientation = containerWidthToOrientation(width);
      const axis = yearsMinMaxToListOfYears(yearsToShow);
      const axisLengths = calculateAxisLengths(axis, width);
      // initialize graphState
      dispatchGraphState({
        type: 'INITIALIZE_GRAPH_STATE_WITHOUT_PLACEMENT',
        state: {
          orientation,
          axis,
          axisLengths: axisLengths,
          events,
        },
      });
      return;
    }
    // Graph initialized-with-placement => initialized-with-placement orientation change
    if (
      // Initialized-with-placement graph needs to be updated with positioning
      graphState.stage === GraphStateStage.INITIALIZED &&
      previousWidthHeight !== null &&
      containerWidthToOrientation(width) !== graphState?.state?.orientation
    ) {
      dispatchGraphState({ type: 'RESET_GRAPH' });
      resetRealEventWindowSizes();
      return;
    }
    // Graph initialized-without-placement => initialized-with-placement
    if (
      // Graph original initialization last step
      (graphState.stage === GraphStateStage.INITIALIZED_WITHOUT_PLACEMENT &&
        realEventWindowSizes !== null) ||
      // Graph needs to be updated with positioning
      (previousWidthHeight !== null &&
        graphState.stage === GraphStateStage.INITIALIZED &&
        previousWidthHeight.width !== width &&
        realEventWindowSizes !== null)
    ) {
      const orientation = containerWidthToOrientation(width);
      if (orientation !== graphState.state.orientation) {
        console.error('Not implemented 4');
        return;
      }
      const { eventPlacements, axisLengths } = placeEventsOnTimeline(
        graphState.state,
        realEventWindowSizes,
        { width, height }
      );
      const dimensionsPlacementIsBasedOn = { width, height };
      dispatchGraphState({
        type: 'UPDATE_AXIS_AND_EVENTS_PLACEMENTS',
        eventPlacements,
        axisLengths,
        orientation,
        dimensionsPlacementIsBasedOn,
      });
      return;
    }
  }, [width, height, realEventWindowSizes, graphState.stage]);

  const loading = useMemo(() => {
    return (
      graphState.stage !== GraphStateStage.INITIALIZED ||
      graphState?.state?.dimensionsPlacementIsBasedOn?.width !== width
    );
  }, [graphState.stage, graphState?.state?.dimensionsPlacementIsBasedOn?.width, width, height]);

  return { updateRealEventWindowSize, graphState, ref, width, height, loading };
}
