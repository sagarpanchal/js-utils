import { FRACTION_LENGTH } from "constants/Common";
import { isNumber } from "./isNumber";

export function formatFloat(input, fractionLength = FRACTION_LENGTH) {
  if (!isNumber(Number(input))) return undefined;
  return parseFloat(input).toFixed(fractionLength);
}
