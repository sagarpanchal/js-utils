import { InvalidArgumentError } from "../errors";
import { isFunction } from "./isFunction";
import { catchError } from "./catchError";
import { isString } from "./isString";
import { get } from "./get";

export function map(instance, iteratee) {
  if (!isFunction(iteratee) && !isString(iteratee)) {
    throw new InvalidArgumentError({ arg: iteratee, name: "iteratee", pos: 2, types: [Function, String] });
  }

  const callback = isString(iteratee) ? (obj) => get(obj, iteratee) : iteratee;
  return catchError(
    () => Array.prototype.map.call(instance, callback),
    () => []
  );
}
