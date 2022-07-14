import { isArray } from "./isArray";
import { isNumber } from "./isNumber";
import { isEmpty } from "./isEmpty";

export function reduceTotal(list, key) {
  if (!isArray(list) || isEmpty(list)) return 0;
  const numList = key === undefined ? list.map(Number) : list.map((item) => Number(item?.[key]));
  return numList.filter(isNumber).reduce((pv, cv) => (pv += cv), 0);
}
