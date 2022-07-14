import { isDevEnv } from './isDevEnv';

export function logInfo(...args) {
  return void (isDevEnv() || window.__DN?.DEBUG) && console.info(...args); // eslint-disable-line no-console
}
