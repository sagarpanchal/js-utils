export function returnIf(func, ...args) {
  return func(...args) ? args?.[0] : undefined;
}
