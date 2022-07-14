import { getKey } from "./getKey";

export function uniqueBy(list = [], pathGetter) {
  const output = list.reduce((p = [], c) => {
    const currentKey = getKey(c, pathGetter);
    const indexFound = p.findIndex((item) => getKey(item, pathGetter) === currentKey);
    if (indexFound === -1) p.push(c);
    return p;
  }, []);
  return output;
}
