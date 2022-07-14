import { isString } from "./isString";

export function sortArrayByKey(key = "id", desc = false) {
  if (!isString(key)) return undefined;
  const n = { less: desc ? 1 : -1, more: desc ? -1 : 1 };
  return (curr, next) => (curr?.[key] < next?.[key] ? n.less : curr?.[key] > next?.[key] ? n.more : 0);
}
