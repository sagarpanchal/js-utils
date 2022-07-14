import { isFunction } from "./isFunction";

export function isIterable(input) {
  return isFunction(input?.[Symbol.iterator]);
}
