import { isDevEnv } from './isDevEnv';

export function logWarn(...args) {
  return void (isDevEnv() || window.__DN?.DEBUG) && console.warn(...args); // eslint-disable-line no-console
}
