export enum TimelinePointStyle {
  completed = 'completed', // achieved timeline event
  aim = 'aim', // an ambition, aim, target, not yet achieved
}

export interface TimelineEvent {
  // Date in format 'YYYY-MM-DD': '2019-11-24'
  date: string;
  text: string;
  image?: string;
  markerStyle: TimelinePointStyle;
}

export enum MarkerPlacementStyle {
  before = 'before', // marker is placed before eventbox
  after = 'after', // marker is placed after event box
  within = 'within', // marker is placed somewhere within event box
}

export interface EventPlacementOnTimelineGraph {
  x: number; // Not used for 1d / vertical layout
  y: number;
  markerPlacementStyle: MarkerPlacementStyle; // How date marker line is placed relative to event description
  completeWidth: number; // not used for 1d / vertical layout
  completeHeight: number;
  eventBoxWidth: number; // not used for 1d / vertical layout
  attributes?: EventPlacementOnTimeGraphAttribute[];
}

export enum EventPlacementOnTimeGraphAttribute {
  VERTICAL_COMBINE_WITH_PREVIOUS = 'VERTICAL_COMBINE_WITH_PREVIOUS',
}

export interface EventPlacementOn1DTimelineGraph {
  y: number;
  markerPlacementStyle: MarkerPlacementStyle; // How date marker line is placed relative to event description
  height: number;
}

export interface EventWindowSize {
  width: number;
  height: number;
}
