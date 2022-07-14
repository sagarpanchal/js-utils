import { typeOf } from "./typeOf";

export function isSyntheticEvent(input) {
  return typeOf(input, "SyntheticEvent");
}
