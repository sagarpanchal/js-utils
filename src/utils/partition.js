import { InvalidArgumentError } from "../errors";
import { isFunction } from "./isFunction";
import { isArray } from "./isArray";
import { isObject } from "./isObject";

export function partition(input, callback) {
  if (!isArray(input) && !isObject(input)) {
    throw new InvalidArgumentError({ name: "input", pos: 1, types: [Array, Object] });
  }
  if (!isFunction(callback)) {
    throw new InvalidArgumentError({ name: "callback", pos: 2, types: [Function] });
  }

  const output = { picked: undefined, rest: undefined };

  if (isArray(input)) {
    void ((output.picked = []), (output.rest = []));
    input.forEach((value, index) => void output[callback(value, index) ? "picked" : "rest"].push(value));
  }

  if (isObject(input)) {
    void ((output.picked = {}), (output.rest = {}));
    Object.entries(input).forEach(
      ([key, value]) => void (output[callback(value, key) ? "picked" : "rest"][key] = value)
    );
  }

  return [output.picked, output.rest];
}
