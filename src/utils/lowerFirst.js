import { LOCALE } from "constants/Common";
import { isString } from "./isString";

export function lowerFirst(input, locale = LOCALE) {
  if (!isString(input)) return "";
  return input.replace(/(^[a-z])/, (match) => match.toLocaleLowerCase(locale));
}
