import { isNotEmpty } from "./isNotEmpty";
import { returnIf } from "./returnIf.1";

export function returnIfNotEmpty(input, defaultValue) {
  return returnIf(isNotEmpty, input) ?? defaultValue;
}
