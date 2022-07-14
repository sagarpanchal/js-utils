const _baseClone = (src, seen) => {
  // Immutable things - null, undefined, functions, symbols, etc.
  if (!src || typeof src !== "object") return src;

  // Things we've seen already (circular refs)
  if (seen.has(src)) return seen.get(src);

  // Basic pattern for cloning something below here is:
  // 1. Create copy
  // 2. Add it to `seen` immediately, so we recognize it if we see it in
  //    subordinate members
  // 3. clone subordinate members

  let copy;
  if (src.nodeType && "cloneNode" in src) {
    // DOM Node
    copy = src.cloneNode(true);
    seen.set(src, copy);
  } else if (src?.clone?.constructor === Function) {
    // DOM Node
    copy = src.clone();
    seen.set(src, copy);
  } else if (src?.constructor === Date) {
    // Date
    copy = new Date(src.getTime());
    seen.set(src, copy);
  } else if (src?.constructor === RegExp) {
    // RegExp
    copy = new RegExp(src);
    seen.set(src, copy);
  } else if (src?.constructor === Array) {
    // Array
    copy = new Array(src.length);
    seen.set(src, copy);
    for (let i = 0; i < src.length; i++) copy[i] = _baseClone(src[i], seen);
  } else if (src?.constructor === Map) {
    // Map
    copy = new Map();
    seen.set(src, copy);
    for (const [k, v] of src.entries()) copy.set(k, _baseClone(v, seen));
  } else if (src?.constructor === Set) {
    // Set
    copy = new Set();
    seen.set(src, copy);
    for (const v of src) copy.add(_baseClone(v));
  } else if (src?.constructor === Object) {
    // Object
    copy = {};
    seen.set(src, copy);
    for (const [k, v] of Object.entries(src)) copy[k] = _baseClone(v, seen);
  } else if (src?.constructor?.constructor?.name === "Function") {
    // constructor
    copy = new src.constructor(src);
    seen.set(src, copy);
  } else {
    // Unrecognized thing.  It's better to throw here than to return `src`, as
    // we don't know whether src needs to be deep-copied here.
    throw Error(`Unable to clone ${src}`);
  }

  return copy;
};

export const clone = (src) => _baseClone(src, new Map());
