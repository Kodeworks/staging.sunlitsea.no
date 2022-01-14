import React, { useEffect, useRef } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { EventWindowSize, MarkerPlacementStyle, TimelineEvent } from './graphTypes';

interface TimelineEventWindowProps {
  event: TimelineEvent;
  sizeUpdater(eventWindowSize: EventWindowSize, index: number): void;
  index: number;
  markerPlacementStyle?: MarkerPlacementStyle;
  orientation: 'vertical' | 'horizontal';
}

/**
 * Event window that renders and reports size
 * @constructor
 */
export const TimelineEventWindow: React.FC<TimelineEventWindowProps> = ({
  event,
  sizeUpdater,
  index,
  markerPlacementStyle,
  orientation,
}) => {
  const { width, height, ref } = useResizeDetector();

  const sizeReportedOnce = useRef(false);
  useEffect(() => {
    if (width !== undefined && height !== undefined && !sizeReportedOnce.current) {
      sizeReportedOnce.current = true;
      sizeUpdater({ width, height }, index);
    }
  }, [width, height]);

  return (
    <div
      ref={ref}
      className={
        markerPlacementStyle === MarkerPlacementStyle.after && orientation === 'horizontal'
          ? 'text-right'
          : ''
      }
    >
      {event.text}
    </div>
  );
};
