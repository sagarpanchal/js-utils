import { FRACTION_LENGTH } from "constants/Common";
import { isNumber } from "./isNumber";

export function parseDecimal(input, fractionLength = FRACTION_LENGTH) {
  if (!isNumber(Number(input))) return undefined;
  return Number(parseFloat(input).toFixed(fractionLength));
}
