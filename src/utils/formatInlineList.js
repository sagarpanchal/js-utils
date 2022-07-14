import { isArray } from "./isArray";
import { isString } from "./isString";
import { isEmpty } from "./isEmpty";
import { unique } from "./unique";

export function formatInlineList(list, options = {}) {
  options = { separator: ",", returnString: true, removeDupes: true, allowAppend: false, ...options };

  if (isArray(list)) list = list.join(options.separator);
  if (!isString(list)) return list;

  let output = `${list}`.replace(/[\s,]+/gm, options.separator).split(options.separator);
  output = output.filter(
    (value, index) => !isEmpty(value) || (options.allowAppend && index && output?.length === index + 1)
  );
  options.removeDupes = options.allowAppend
    ? isEmpty(output[output.length - 1]) && options.removeDupes
    : options.removeDupes;
  output = options.removeDupes ? unique(output) : output;
  output = options.returnString ? output.join(options.separator) : output;

  return output;
}
