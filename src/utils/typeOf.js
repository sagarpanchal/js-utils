export function typeOf(input, type) {
  return input?.constructor?.name === (type ?? null);
}
