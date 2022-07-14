import forOwn from "lodash/forOwn";
import { clone } from "../clone";
import { catchError } from "./catchError";
import { isArray } from "./isArray";
import { isObject } from "./isObject";
import { isString } from "./isString";
import { isEmpty } from "./isEmpty";

export function pruneEmpty(input, options) {
  options = { clone: false, ...options };
  input = options.clone ? clone(input) : input;
  const prune = (current) => {
    current = catchError(() => {
      if (isEmpty(current)) current = undefined;
      if (isString(current)) current = current?.trim?.();
      if (isArray(current)) current = current.filter((value) => !isEmpty(prune(value), options));
      forOwn(current, (value, key) => {
        if (isEmpty(value, options) || ((isObject(value) || isArray(value)) && isEmpty(prune(value), options)))
          delete current[key];
      });
      return current;
    });

    current = !isEmpty(current, options) ? current : undefined;
    return current;
  };
  return prune(input);
}
