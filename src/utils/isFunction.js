import { typeOf } from "./typeOf";

export function isFunction(input) {
  return typeOf(input, "Function");
}
