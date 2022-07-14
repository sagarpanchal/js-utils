import isEqual from "lodash/isEqual";
import xorWith from "lodash/xorWith";
import { isEmpty } from "./isEmpty";

export function isArrayEqual(list1, list2) {
  return isEmpty(xorWith(list1, list2, isEqual));
}
