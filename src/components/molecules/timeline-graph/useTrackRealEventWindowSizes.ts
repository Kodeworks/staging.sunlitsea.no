import { EventWindowSize, TimelineEvent } from './graphTypes';
import { useCallback, useRef, useState } from 'react';

// eslint-disable-next-line
export function useTrackRealEventWindowSizes(events: TimelineEvent[]) {
  const [realEventWindowSizes, setRealEventWindowSizes] = useState<EventWindowSize[] | null>(null);
  const realEventWindowSizesBuffer = useRef<EventWindowSize[]>([]);
  const updateRealEventWindowSize = useCallback(
    (eventWindowSize: EventWindowSize, index: number) => {
      realEventWindowSizesBuffer.current[index] = eventWindowSize;
      if (checkIfAllSizesAreReady(realEventWindowSizesBuffer.current, events.length)) {
        setRealEventWindowSizes([...realEventWindowSizesBuffer.current]);
      }
    },
    []
  );
  const resetRealEventWindowSizes = useCallback(() => {
    realEventWindowSizesBuffer.current = [];
    setRealEventWindowSizes(null);
  }, [setRealEventWindowSizes]);
  return { realEventWindowSizes, updateRealEventWindowSize, resetRealEventWindowSizes };
}

/**
 * Checks if it looks like sizes for all event windows are received.
 * @param eventWindowSizes
 * @param numberEvents
 */
export function checkIfAllSizesAreReady(
  eventWindowSizes: EventWindowSize[],
  numberEvents: number
): boolean {
  return eventWindowSizes.length >= numberEvents;
}
