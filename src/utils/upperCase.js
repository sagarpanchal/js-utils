import { LOCALE } from "constants/Common";
import { isString } from "./isString";

export function upperCase(input, locale = LOCALE) {
  if (!isString(input)) return "";
  return input.toLocaleUpperCase(locale);
}
