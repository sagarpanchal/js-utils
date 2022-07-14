import { typeOf } from "./typeOf";

export function isNumber(input) {
  return typeOf(input, "Number") && !Number.isNaN(input) && Number.isFinite(input);
}
