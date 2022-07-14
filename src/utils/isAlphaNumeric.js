import { REGEX } from "../constants";

export function isAlphaNumeric(input, strict = false) {
  return new RegExp(strict ? REGEX.ALPHA_NUMERIC.STRICT : REGEX.ALPHA_NUMERIC.LOOSE).test(input);
}
