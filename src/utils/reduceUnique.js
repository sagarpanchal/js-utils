export function reduceUnique(key) {
  return (a = [], c) => {
    const indexFound = a.findIndex((item) => (key === undefined ? item === c : item[key] === c[key]));
    if (indexFound === -1) a.push(c);
    return a;
  };
}
