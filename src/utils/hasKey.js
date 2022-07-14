import { catchError } from "./catchError";

export function hasKey(object, key) {
  return catchError(() => Object.hasOwn(object ?? {}, key)) ?? false;
}
