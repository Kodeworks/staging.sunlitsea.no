/* eslint-disable */
export function debounce(func, delay = 50) {
  let timer: any = null;
  return function(...args) {
    // @ts-ignore
    const context = this;
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}
