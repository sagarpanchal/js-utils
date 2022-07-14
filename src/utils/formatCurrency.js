import { CURRENCY, FRACTION_LENGTH } from "constants/Common";
import { isNumber } from "./isNumber";
import { formatNumber } from "./formatNumber";

export function formatCurrency(input, options = {}) {
  if (isNumber(options)) options = { fractionLength: options };
  return formatNumber(input, { style: "currency", currency: CURRENCY, fractionLength: FRACTION_LENGTH, ...options });
}
