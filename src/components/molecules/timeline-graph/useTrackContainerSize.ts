import { debounce } from './debounceThrottle';
import { useCallback, useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';


export function useTrackContainerSize(): {
  width: number| undefined,
  height: number|undefined,
  ref: React.MutableRefObject<any> // eslint-disable-line
} {
  // debounced resizeDetector
  const resizeDetector = useResizeDetector();
  const [containerDimensions, setContainerDimensions] = useState<{
    width: undefined | number;
    height: undefined | number;
  }>({width: undefined, height: undefined});
  const updateContainerDimensions: typeof setContainerDimensions = useCallback(
    debounce(setContainerDimensions, 500),
    [setContainerDimensions]
  );
  useEffect(() => {
    updateContainerDimensions({width: resizeDetector.width, height: resizeDetector.height});
  }, [resizeDetector.width, resizeDetector.height]);
  const {width, height} = containerDimensions;
  return {width, height, ref: resizeDetector.ref};
}
