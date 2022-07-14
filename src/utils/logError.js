import { isDevEnv } from './isDevEnv';

export function logError(...args) {
  return void (isDevEnv() || window.__DN?.DEBUG) && console.error(...args); // eslint-disable-line no-console
}
