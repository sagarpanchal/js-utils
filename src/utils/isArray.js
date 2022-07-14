import { typeOf } from "./typeOf";

export function isArray(input) {
  return typeOf(input, "Array");
}
