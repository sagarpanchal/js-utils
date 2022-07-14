import { isEmpty } from "./isEmpty";

export function isNotEmpty(...args) {
  return !isEmpty(...args);
}
