export function isEmpty(input, options) {
  options = { isEmpty: [], isNotEmpty: [], ...options };

  if (options.isEmpty?.includes?.(input)) return true;
  if (options.isNotEmpty?.includes?.(input)) return false;
  if ([undefined, null].includes(input)) return true;

  if (input?.constructor?.name === "Array") return !input.length;
  if (input?.constructor?.name === "Number") return Number.isNaN(input);
  if (input?.constructor?.name === "Object") return !Object.keys(input).length;
  if (input?.constructor?.name === "String") return !input.trim().length;

  return false;
}
