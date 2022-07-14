import { REGEX } from "../constants";

export function isNumeric(input, strict = false) {
  return new RegExp(strict ? REGEX.NUMERIC.STRICT : REGEX.NUMERIC.LOOSE).test(input);
}
