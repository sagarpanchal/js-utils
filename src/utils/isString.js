import { typeOf } from "./typeOf";

export function isString(input) {
  return typeOf(input, "String");
}
