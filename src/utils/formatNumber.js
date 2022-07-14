import { LOCALE } from "constants/Common";
import { isNumber } from "./isNumber";
import { castToNumber } from "./castToNumber";

export function formatNumber(input, options = {}) {
  if (isNumber(options)) options = { fractionLength: options };

  input = castToNumber(input);
  if (!isNumber(input)) return undefined;

  const { locale, fractionLength, ...rest } = { locale: LOCALE, ...options };
  const fractionDigits = fractionLength ?? `${input}`.split(".")?.[1]?.length ?? 0;
  const formatOptions = { maximumFractionDigits: fractionDigits, minimumFractionDigits: fractionDigits, ...rest };
  return new Intl.NumberFormat(locale, formatOptions).format(input);
}
