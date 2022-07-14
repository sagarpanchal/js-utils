import { isDevEnv } from './isDevEnv';

export function logTable(...args) {
  return void (isDevEnv() || window.__DN?.DEBUG) && console.table(...args); // eslint-disable-line no-console
}
