import { getKey } from "./getKey";

export function groupBy(list = [], pathGetter) {
  const output = {};
  list.forEach((item) => {
    const key = getKey(item, pathGetter);
    output[key] = output[key] ?? [];
    output[key].push(item);
  });
  return output;
}
