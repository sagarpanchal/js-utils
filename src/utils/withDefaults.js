export function withDefaults(object, defaults) {
  return { ...defaults, ...object };
}
