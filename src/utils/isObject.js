import { typeOf } from "./typeOf";

export function isObject(input) {
  return typeOf(input, "Object");
}
