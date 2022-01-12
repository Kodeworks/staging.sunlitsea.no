/**
 * Takes a list of years, list of their lengths in pixels on graph, a date.
 * Returns pixel coordinate of the date on graph.
 * @param event
 * @param axis
 * @param axisLengths
 */
import { TimelineEvent } from '../graphTypes';
import { differenceInDays, getDayOfYear, getYear, sub } from 'date-fns';
import { InitializedGraphState } from '../graphState';
import { useEffect, useRef } from 'react';

export function getDateAxisCoordinateForEvent(
  event: TimelineEvent,
  axis: InitializedGraphState['state']['axis'],
  axisLengths: InitializedGraphState['state']['axisLengths']
): number {
  const date = new Date(event.date);
  const year = getYear(date);
  const yearIndex = axis.indexOf(year);
  if (yearIndex === -1) {
    const msg =
      'getDateAxisCoordinateForEvent: Unexpected result, did not find year in provided array';
    console.error(msg);
    throw new Error(msg);
  }
  const yearPixelLength = axisLengths[yearIndex];
  const baseX = (() => {
    let accumulator = 0;
    let i = 0;
    while (i < yearIndex) {
      accumulator += axisLengths[i];
      i++;
    }
    return accumulator;
  })();
  const howFarInYear = getDayOfYear(date) / 365.0;
  return howFarInYear * yearPixelLength + baseX;
}

/**
 * Returns number between 0 and 1
 * @param event
 * @param axis
 */
export function getDateAxisCoordinateForEventVertical(
  event: TimelineEvent,
  axis: InitializedGraphState['state']['axis'],
): number {
  const date = new Date(event.date);
  const lowestDay = new Date(`${axis[0]}-01-01`);
  const highestDay = sub(new Date(`${axis[axis.length - 1] + 1}-01-01`), { days: 1 });
  return differenceInDays(lowestDay, date) / differenceInDays(lowestDay, highestDay);
}

export function sum(a: number[]): number {
  if (a.length === 0) {
    return 0;
  }
  return a.reduce((p, c) => p + c);
}

export function usePrevious<T>(newValue: T): T | null {
  const previousValue = useRef<null | T>(null);
  useEffect(() => {
    previousValue.current = newValue;
  }, [newValue]);
  return previousValue.current;
}
