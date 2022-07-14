import { isString } from "./isString";

export function classNames(list) {
  return list.filter(isString).join(" ");
}
