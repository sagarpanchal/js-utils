import { LOCALE } from "constants/Common";
import { isString } from "./isString";

export function lowerCase(input, locale = LOCALE) {
  if (!isString(input)) return "";
  return input.toLocaleLowerCase(locale);
}
