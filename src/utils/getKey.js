import { isFunction } from "./isFunction";
import { get } from "./get";

export function getKey(input, pathGetter) {
  return isFunction(pathGetter) ? pathGetter(input) : get(input, pathGetter);
}
