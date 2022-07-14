import { generatePath } from "react-router-dom";
import { catchError } from "./catchError";

export function generateRoutePath(path, params) {
  return catchError(
    () => generatePath(path, params),
    () => path.split(":")?.[0] ?? ""
  );
}
