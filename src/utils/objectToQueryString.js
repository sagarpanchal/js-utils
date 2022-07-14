import { isFunction } from "./isFunction";
import { catchError } from "./catchError";
import { isEmpty } from "./isEmpty";

export function objectToQueryString(object) {
  return catchError(
    () =>
      `?${Object.entries(object)
        .map(([key, value]) => `${key}=${!isEmpty(value) && isFunction(value?.toString) ? value.toString() : ""}`)
        .join("&")}`,
    () => ""
  );
}
