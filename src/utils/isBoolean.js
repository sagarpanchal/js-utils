import { typeOf } from "./typeOf";

export function isBoolean(input) {
  return typeOf(input, "Boolean");
}
