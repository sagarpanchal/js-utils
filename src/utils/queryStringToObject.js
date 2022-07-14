import { catchError } from "./catchError";

export function queryStringToObject(search = window.location.search) {
  return catchError(
    () => {
      const urlParams = new URLSearchParams(search);
      return Object.fromEntries(urlParams.entries());
    },
    () => {}
  );
}
