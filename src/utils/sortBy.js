import { getKey } from "./getKey";

export function sortBy(list = [], pathGetter, desc = false) {
  const returnValue = { less: desc ? 1 : -1, more: desc ? -1 : 1 };
  return list.sort((curr, next) => {
    const currVal = getKey(curr, pathGetter);
    const nextVal = getKey(next, pathGetter);
    return currVal < nextVal ? returnValue.less : currVal > nextVal ? returnValue.more : 0;
  });
}
