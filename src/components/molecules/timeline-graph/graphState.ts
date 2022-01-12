import { EventPlacementOnTimelineGraph, TimelineEvent } from './graphTypes';
import { sum } from './placementCalculation/commonUtils';
import { TIMELINE_GRAPH_CONSTANTS } from './constants';

export interface InitializedGraphState {
  stage: GraphStateStage.INITIALIZED | GraphStateStage.INITIALIZED_WITHOUT_PLACEMENT;
  state: {
    orientation: 'vertical' | 'horizontal';
    // list of years on timeline: ['2019', '2020']
    axis: number[];
    // Length in px for each year on axis
    axisLengths: number[];
    events: TimelineEvent[];
    // layout of the events
    eventPlacements: EventPlacementOnTimelineGraph[];
    graphHeight?: number;
    // WidthXHeight that were basis for this layout
    dimensionsPlacementIsBasedOn?: { width: number; height: number };
  };
}
export type GraphState =
  | InitializedGraphState
  | {
  stage: typeof GraphStateStage.UNINITIALIZED;
  state: null;
};
export enum Orientation {
  vertical = 'vertical',
  horizontal = 'horizontal',
}
export enum GraphStateStage {
  UNINITIALIZED = 'UNINITIALIZED',
  INITIALIZED_WITHOUT_PLACEMENT = 'INITIALIZED_WITHOUT_PLACEMENT',
  INITIALIZED = 'INITIALIZED_WITH_PLACEMENT',
}
export function uninitializedGraphState(): GraphState {
  return {
    state: null,
    stage: GraphStateStage.UNINITIALIZED,
  };
}
export type GraphStateAction =
  | ({ type: 'INITIALIZE_GRAPH_STATE_WITHOUT_PLACEMENT' } & {
      state: Omit<InitializedGraphState['state'], 'eventPlacements' | 'graphHeight'>;
    })
  | {
      type: 'UPDATE_AXIS_AND_EVENTS_PLACEMENTS';
      eventPlacements: InitializedGraphState['state']['eventPlacements'];
      axisLengths: InitializedGraphState['state']['axisLengths'];
      orientation: InitializedGraphState['state']['orientation'];
      dimensionsPlacementIsBasedOn: InitializedGraphState['state']['dimensionsPlacementIsBasedOn'];
    }
  | {
      type: 'RESET_GRAPH';
    };
export function graphStateReducer(state: GraphState, action: GraphStateAction): GraphState {
  if (action.type === 'INITIALIZE_GRAPH_STATE_WITHOUT_PLACEMENT') {
    return {
      state: {
        ...action.state,
        eventPlacements: [],
      },
      stage: GraphStateStage.INITIALIZED_WITHOUT_PLACEMENT,
    };
  } else if (action.type === 'UPDATE_AXIS_AND_EVENTS_PLACEMENTS') {
    if (
      state.stage !== GraphStateStage.INITIALIZED_WITHOUT_PLACEMENT &&
      state.stage !== GraphStateStage.INITIALIZED
    ) {
      console.error('Expected initialized state, received uninitialized state, skipping update');
      return state;
    }
    const height =
      action.orientation === Orientation.vertical
        ? sum(action.axisLengths)
        : (() => {
            const sortedPlacements = [...action.eventPlacements].sort((a, b) => a.y - b.y);
            return (
              sortedPlacements[sortedPlacements.length - 1].y +
              sortedPlacements[sortedPlacements.length - 1].completeHeight +
              TIMELINE_GRAPH_CONSTANTS.yearAxisHorizontalHeight
            );
          })();
    return {
      state: {
        ...state.state,
        eventPlacements: action.eventPlacements,
        axisLengths: action.axisLengths,
        orientation: action.orientation,
        graphHeight: height,
        dimensionsPlacementIsBasedOn: action.dimensionsPlacementIsBasedOn,
      },
      stage: GraphStateStage.INITIALIZED,
    };
  } else if (action.type === 'RESET_GRAPH') {
    return {
      stage: GraphStateStage.UNINITIALIZED,
      state: null,
    };
  }
  return state;
}
