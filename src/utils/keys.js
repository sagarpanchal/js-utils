import { catchError } from "./catchError";

export function keys(...args) {
  return catchError(() => Object.keys(...args)) ?? [];
}
