import { catchError } from "./catchError";

export function values(...args) {
  return catchError(() => Object.values(...args)) ?? [];
}
