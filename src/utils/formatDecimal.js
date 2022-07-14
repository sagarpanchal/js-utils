import { FRACTION_LENGTH } from "constants/Common";
import { isNumber } from "./isNumber";
import { formatNumber } from "./formatNumber";

export function formatDecimal(input, options = {}) {
  if (isNumber(options)) options = { fractionLength: options };
  return formatNumber(input, { fractionLength: FRACTION_LENGTH, ...options });
}
