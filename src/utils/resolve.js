import { logInfo } from "../logInfo";
import { hasKey } from ".";
import { isFunction } from "./isFunction";

export function resolve(input, ...args) {
  logInfo("./resolve", input?.constructor?.name, input);

  if (isFunction(input)) return input(...args);
  if (hasKey(input, "target")) return input.target.value;

  return input;
}
