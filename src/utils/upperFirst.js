import { LOCALE } from "constants/Common";
import { isString } from "./isString";

export function upperFirst(input, locale = LOCALE) {
  if (!isString(input)) return "";
  return input.replace(/(^[a-z])/, (match) => match.toLocaleUpperCase(locale));
}
