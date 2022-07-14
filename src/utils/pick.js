import { partition } from "./partition";

export function pick(input, keys) {
  return partition(input, (_, key) => keys.includes(key));
}
