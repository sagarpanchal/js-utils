import { isDevEnv } from './isDevEnv';

export function runInDevelopment(callback) {
  return isDevEnv() && callback();
}
