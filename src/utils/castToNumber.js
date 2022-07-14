import { isString } from "./isString";
import { isNumber } from "./isNumber";

export function castToNumber(input, altOutput = undefined) {
  const output = isString(input) ? Number(`${input}`.replace(/[^0-9.+-]/g, "")) : Number(input);
  return isNumber(output) ? output : altOutput;
}
